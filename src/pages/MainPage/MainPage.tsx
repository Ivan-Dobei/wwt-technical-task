import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react'

import { FilterModal } from '@components/FilterModal/FilterModal.tsx'

export const MainPage = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<Flex
			justifyContent="center"
			alignItems="center"
			height="200px"
		>
			<Box>
				<Button
					height={'64px'}
					borderRadius={'16px'}
					bgColor={'#FF5F00'}
					color={'white'}
					_hover={{ bgColor: '#FF9E59' }}
					onClick={onOpen}
				></Button>

				<FilterModal
					isOpen={isOpen}
					onClose={onClose}
				/>
			</Box>
		</Flex>
	)
}
