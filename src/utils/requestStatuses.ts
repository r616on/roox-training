export type RequestStatusType = {
  loading: boolean;
  ok: boolean;
  error: boolean;
};

export type RequestStatusesType = {
  init: RequestStatusType;
  loading: RequestStatusType;
  ok: RequestStatusType;
  setError: RequestStatusType;
};

const requestStatuses: RequestStatusesType = {
  init: {
    loading: false,
    ok: false,
    error: false,
  },
  loading: {
    loading: true,
    ok: false,
    error: false,
  },
  ok: {
    loading: false,
    ok: true,
    error: false,
  },
  setError: {
    loading: false,
    ok: false,
    error: true,
  },
};

export default requestStatuses;
