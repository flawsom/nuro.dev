import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Icon } from '@iconify/react';
import { useMemo } from 'react';
import { useTheme } from 'next-themes';

import { Button } from './Button';

const Container = styled.div(tw`fixed top-0 right-0 m-8 z-10`);

const StyledIcon = styled(Icon)`
	${tw`w-6 h-6`}
`;

export function ThemeButton() {
	const { theme, setTheme } = useTheme();

	const isDark = useMemo(() => (theme === 'dark' ? true : false), [theme]);

	function toggle() {
		setTheme(isDark ? 'light' : 'dark');
	}

	return (
		<Container>
			<Button.Icon aria-label="Toggle Theme" onClick={toggle}>
				<StyledIcon icon={isDark ? 'feather:moon' : 'feather:sun'} />
			</Button.Icon>
		</Container>
	);
}

export default ThemeButton;
