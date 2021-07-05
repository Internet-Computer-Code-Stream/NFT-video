import Hash "mo:base/Hash";
import Nat "mo:base/Nat";
import List "mo:base/List";
import Principal "mo:base/Principal";

import DB "mo:crud/Database";

actor {

    type Id = Nat;
    type Data = Text;

    func getNextId(_ : Any, id : ?Id) : Id {
        switch (id) {
            case (?id) id + 1;
            case (null) 0;
        }
    };

    let db = DB.Database<Id, Data>(getNextId, Nat.equal, #hash(Hash.hash));

    public func create(data : Data) : async Id {
        db.create(data)
    };

    public query func read(id : Id) : async DB.Res<Data> {
        db.read(id)
    };

    public query func readAll() : async [Data] {
        var list = List.nil<Data>();
        for ((_, url) in db.entries()) {
            list := List.push<Data>(url, list);
        };
        List.toArray<Data>(list)
    };

};
