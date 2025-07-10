export interface ProtectedLayoutOwn {
  children: React.ReactNode;
}

export interface ProtectedLayoutDispatchProps {
  dispatchLogout: () => void;
}

export type ProtectedLayoutProps = ProtectedLayoutOwn &
  ProtectedLayoutDispatchProps;
