import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Button from './ui/Button'
import Input from './ui/Input'
import Heading from './ui/Heading'

const StyledApp = styled.main`
	background-color: orangered;
	padding: 20px;
`

function App() {
	return (
		<>
			<GlobalStyles />
			<StyledApp>
				<Heading as="h1">The Wild Oasis</Heading>
				<Heading as="h2">Checking in and out</Heading>
				<Button>Check in</Button>
				<Heading as="h3">Form</Heading>
				<Input type="numer" placeholder="Number of guests" />
			</StyledApp>
		</>
	)
}

export default App
