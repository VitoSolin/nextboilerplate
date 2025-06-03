// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Feature item interface
export interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

// Navigation item interface
export interface NavItem {
  href: string;
  label: string;
  external?: boolean;
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Common utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type Nullable<T> = T | null; 