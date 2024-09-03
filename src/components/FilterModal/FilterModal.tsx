import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/react'

interface FilterModalInterface {
	isOpen: boolean
	onClose: () => void
}

export const FilterModal = ({ isOpen, onClose }: FilterModalInterface) => {
	return (
		<>
			<Modal
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader></ModalHeader>
					<ModalCloseButton />
					<ModalBody></ModalBody>

					<ModalFooter>
						<Button
							colorScheme="blue"
							mr={3}
							onClick={onClose}
						></Button>
						<Button variant="ghost"></Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}
