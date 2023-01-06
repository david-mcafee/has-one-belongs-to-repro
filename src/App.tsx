import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CompositeDog, CompositeOwner } from "./models";
import { DataStore, Predicates } from "aws-amplify";

function App() {
  const [dogs, setDogs] = useState([]);
  const [owners, setOwners] = useState([]);
  const [currentDog, setCurrentDog] = useState([]);
  const [currentOwner, setCurrentOwner] = useState([]);

  async function getCompositeDogs() {
    const _dogs = await DataStore.query(CompositeDog);
    console.log("_dogs", _dogs);
    //@ts-ignore
    setDogs(_dogs);
  }

  async function getCompositeOwners() {
    const _owners = await DataStore.query(CompositeOwner);
    console.log("_owners", _owners);
    //@ts-ignore
    setOwners(_owners);
  }

  // useEffect(() => {
  //   const subscription1 = DataStore.observe(CompositeDog).subscribe(() => {
  //     getCompositeDogs();
  //   });
  //   const subscription2 = DataStore.observe(CompositeOwner).subscribe(() => {
  //     getCompositeOwners();
  //   });

  //   return () => {
  //     subscription1.unsubscribe();
  //     subscription2.unsubscribe();
  //   };
  // }, []);

  const createSeparateDogsAndOwnerThenQuery = async () => {
    const dog1 = await DataStore.save(
      new CompositeDog({
        name: "Dog1",
        description: `${Date.now()}`,
      })
    );

    console.log(dog1);

    // const dog2 = await DataStore.save(
    //   new CompositeDog({ name: "Dog2", description: `${Date.now()}` })
    // );

    // console.log(dog2);

    const owner1 = await DataStore.save(
      new CompositeOwner({
        lastName: `${Date.now()}`,
        firstName: "Dale",
      })
    );

    console.log(owner1);

    //@ts-ignore
    setCurrentDog(dog1);
    //@ts-ignore
    setCurrentOwner(owner1);
  };

  const createTwoDogsAndOneOwnerWithConnection = async () => {
    const dog1 = await DataStore.save(
      new CompositeDog({ name: "Dog1", description: `${Date.now()}` })
    );

    console.log("dog1)", dog1);

    //@ts-ignore
    setCurrentDog(dog1);

    const dog2 = await DataStore.save(
      new CompositeDog({ name: "Dog2", description: `${Date.now()}` })
    );

    const owner1 = await DataStore.save(
      new CompositeOwner({
        lastName: `${Date.now()}`,
        firstName: "Dale",
        CompositeDog: dog1,
      })
    );

    console.log("owner1", owner1);

    // Required step:
    const updatedCurrentDog = await DataStore.save(
      CompositeDog.copyOf(dog1, (updated) => {
        updated.CompositeOwner = owner1;
      })
    );

    console.log("updatedCurrentDog", updatedCurrentDog);

    //@ts-ignore
    setCurrentOwner(owner1);

    console.log("dog1", dog1);
    console.log("dog2", dog2);
    console.log("owner1", owner1);
  };

  const createOneDogAndOneOwnerWithConnection = async () => {
    const dog1 = await DataStore.save(
      new CompositeDog({ name: "Dog1", description: `${Date.now()}` })
    );

    console.log("dog1)", dog1);

    //@ts-ignore
    setCurrentDog(dog1);

    const dog2 = await DataStore.save(
      new CompositeDog({ name: "Dog2", description: `${Date.now()}` })
    );

    const owner1 = await DataStore.save(
      new CompositeOwner({
        lastName: `${Date.now()}`,
        firstName: "Dale",
        CompositeDog: dog1,
      })
    );

    console.log("owner1", owner1);

    // Required step:
    const updatedCurrentDog = await DataStore.save(
      CompositeDog.copyOf(dog1, (updated) => {
        updated.CompositeOwner = owner1;
      })
    );

    console.log("updatedCurrentDog", updatedCurrentDog);

    //@ts-ignore
    setCurrentOwner(owner1);

    console.log("dog1", dog1);
    console.log("dog2", dog2);
    console.log("owner1", owner1);
  };

  const queryDogFromCurrentOwner = async () => {
    console.log("local state", currentOwner);

    const queriedOwner1 = await DataStore.query(CompositeOwner, {
      //@ts-ignore
      lastName: currentOwner?.lastName,
      //@ts-ignore
      firstName: currentOwner?.firstName,
    });

    console.log("queriedOwner1", queriedOwner1);

    const lazyRecord = await queriedOwner1?.CompositeDog;

    // Returns as expected
    console.log("lazyRecord should be `undefined`", lazyRecord);
  };

  const deleteAll = async () => {
    await DataStore.delete(CompositeDog, Predicates.ALL);
    await DataStore.delete(CompositeOwner, Predicates.ALL);
    setCurrentDog([]);
    setCurrentOwner([]);
    setDogs([]);
    setOwners([]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Case #1:</h2>
        <button onClick={createTwoDogsAndOneOwnerWithConnection}>
          createTwoDogsAndOneOwnerWithSingleConnection
        </button>
        <button onClick={queryDogFromCurrentOwner}>
          queryDogFromCurrentOwner
        </button>
        <br />
        <h2>Case #2:</h2>
        <button onClick={createOneDogAndOneOwnerWithConnection}>
          createOneDogAndOneOwnerWithConnection
        </button>
        <button onClick={queryDogFromCurrentOwner}>
          queryDogFromCurrentOwner
        </button>
        <br />
        <h2>Case #2:</h2>
        <button onClick={createSeparateDogsAndOwnerThenQuery}>
          createSeparateDogAndOwner
        </button>
        <button onClick={getCompositeDogs}>getCompositeDogs</button>
        <button onClick={getCompositeOwners}>getCompositeOwners</button>
        <button onClick={deleteAll}>deleteAll</button>

        <pre>currentDog: {JSON.stringify(currentDog, null, 2)}</pre>
        <pre>currentOwner: {JSON.stringify(currentOwner, null, 2)}</pre>
        <pre>dogs: {JSON.stringify(dogs, null, 2)}</pre>
        <pre>owners: {JSON.stringify(owners, null, 2)}</pre>
      </header>
    </div>
  );
}

export default App;
