import React from 'react';
import { useResponsive } from '@/hooks/useResponsive';

interface ResponsiveWrapperProps {
  children: React.ReactNode;
  mobileComponent?: React.ComponentType<any>;
  tabletComponent?: React.ComponentType<any>;
  desktopComponent?: React.ComponentType<any>;
  className?: string;
}

export const ResponsiveWrapper: React.FC<ResponsiveWrapperProps> = ({
  children,
  mobileComponent: MobileComponent,
  tabletComponent: TabletComponent,
  desktopComponent: DesktopComponent,
  className = '',
}) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  if (MobileComponent && isMobile) {
    return <MobileComponent className={className} />;
  }
  
  if (TabletComponent && isTablet) {
    return <TabletComponent className={className} />;
  }
  
  if (DesktopComponent && (isDesktop || (!isMobile && !isTablet))) {
    return <DesktopComponent className={className} />;
  }

  return <div className={className}>{children}</div>;
};