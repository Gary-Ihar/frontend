import React, { type PropsWithChildren, type ReactNode } from 'react';

type Props = {
  fallback: ReactNode;
};

export class ErrorBoundary extends React.Component<
  PropsWithChildren<Props>,
  { hasError: boolean }
> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: unknown) {
    console.log('getDerivedStateFromError', _error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  override render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <button onClick={() => window.location.reload()}>reload</button>;
    }

    return this.props.children;
  }
}
