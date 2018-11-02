type uplinkState = {
  sequenceId: option(string),
  pending: list(string),
  unresolved: list(string),
  successful: list(string),
  failed: list(string),
  inProgress: bool,
};

let initialUplinkState = {
  sequenceId: None,
  pending: [],
  unresolved: [],
  successful: [],
  failed: [],
  inProgress: false,
};

type state = {uplink: uplinkState};

let initialState = {uplink: initialUplinkState};

type serializableType = {
  .
  "state": {
    .
    "uplink": {
      .
      "sequenceId": Js.Nullable.t(string),
      "pending": array(string),
      "unresolved": array(string),
      "successful": array(string),
      "failed": array(string),
      "inProgress": bool,
    },
  },
};

let serialize: state => serializableType =
  ({uplink}) => {
    let {sequenceId, pending, unresolved, successful, failed, inProgress} = uplink;
    {
      "state": {
        "uplink": {
          "sequenceId": Js.Nullable.fromOption(sequenceId),
          "pending": Array.of_list(pending),
          "unresolved": Array.of_list(unresolved),
          "successful": Array.of_list(successful),
          "failed": Array.of_list(failed),
          "inProgress": inProgress,
        },
      },
    };
  };