type pubsub;

let publish = [%bs.raw
  {|(pubsub, serializableState) => { pubsub.publish("STATE", serializableState)}|}
];

type stateAsyncIterator;
[@bs.val] [@bs.module "./Subscription"]
external subscriptions : stateAsyncIterator = "";

let init = (pubsub: pubsub) => {
  let store = Store.create(Reducer.reducer, State.initialState);
  Store.subscribe(store, state =>
    publish(pubsub, {"state": State.stateToJs(state)})
  );

  {
    "Query": Query.resolvers(store),
    "Mutation": Mutation.resolvers(store),
    "Subscription": subscriptions,
  };
};