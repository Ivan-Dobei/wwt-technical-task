import { Box } from '@chakra-ui/react'

import { MainPage } from '@pages/MainPage'

export const App = () => {
	return (
		<Box
			maxW="90rem"
			mx="auto"
			minH="100dvh"
		>
			<MainPage />
		</Box>
	)
}
