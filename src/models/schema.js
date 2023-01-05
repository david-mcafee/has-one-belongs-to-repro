export const schema = {
    "models": {
        "CompositeDog": {
            "name": "CompositeDog",
            "fields": {
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "CompositeOwner": {
                    "name": "CompositeOwner",
                    "isArray": false,
                    "type": {
                        "model": "CompositeOwner"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "compositeDogCompositeOwnerLastName",
                            "compositeDogCompositeOwnerFirstName"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "compositeDogCompositeOwnerLastName": {
                    "name": "compositeDogCompositeOwnerLastName",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "compositeDogCompositeOwnerFirstName": {
                    "name": "compositeDogCompositeOwnerFirstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "CompositeDogs",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "name",
                            "description"
                        ]
                    }
                }
            ]
        },
        "CompositeOwner": {
            "name": "CompositeOwner",
            "fields": {
                "lastName": {
                    "name": "lastName",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "firstName": {
                    "name": "firstName",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "CompositeDog": {
                    "name": "CompositeDog",
                    "isArray": false,
                    "type": {
                        "model": "CompositeDog"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "HAS_ONE",
                        "associatedWith": [
                            "CompositeOwner"
                        ],
                        "targetNames": [
                            "compositeOwnerCompositeDogName",
                            "compositeOwnerCompositeDogDescription"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "compositeOwnerCompositeDogName": {
                    "name": "compositeOwnerCompositeDogName",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "compositeOwnerCompositeDogDescription": {
                    "name": "compositeOwnerCompositeDogDescription",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "CompositeOwners",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "lastName",
                            "firstName"
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "codegenVersion": "3.3.4",
    "version": "4d75c79e92e9984513eb41cc80f126c1"
};