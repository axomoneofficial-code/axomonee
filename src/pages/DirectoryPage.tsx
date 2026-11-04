import React from 'react';
import { DirectoryHome } from '../features/directory/DirectoryHome';

/**
 * DirectoryPage - Public page wrapper for the Assam Verified Directory feature (/directory)
 * Implements the component architecture defined in docs/FUTURE_UPGRADE_AND_ARCHITECTURE_GUIDE.md
 */
export const DirectoryPage: React.FC<{ forcedAdmin?: boolean }> = ({ forcedAdmin }) => {
  return <DirectoryHome forcedAdmin={forcedAdmin} />;
};

export default DirectoryPage;
