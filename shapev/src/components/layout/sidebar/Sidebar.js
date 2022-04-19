import React from 'react';
import Selectors from 'components/common/selector/Selector';

import styles from './Sidebar.module.css';

export default function Sidebar({ children }) {
	return <aside className={styles.containerSide}>{children}</aside>;
}
