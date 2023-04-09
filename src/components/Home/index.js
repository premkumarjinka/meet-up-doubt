import {Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import FormDataContext from '../../context/FormDataContext'
import {
  AppContainer,
  HomeContainer,
  RegisteredHeading,
  RegiteredTopic,
  Heading,
  Note,
  Button,
  MeetUpImage,
} from './style'

class Home extends Component {
  render() {
    const {formData} = this.context
    const submitted = formData && formData.name
    return (
      <AppContainer>
        <Header />
        {submitted ? (
          <HomeContainer>
            <RegisteredHeading>Hello {formData.name}</RegisteredHeading>
            <RegiteredTopic>Welcome to {formData.topic}</RegiteredTopic>
            <MeetUpImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </HomeContainer>
        ) : (
          <HomeContainer>
            <Heading>Welcome to Meetup</Heading>
            <Note>Please register for the topic</Note>
            <Link to="/register">
              <Button type="button">Register</Button>
            </Link>
            <MeetUpImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </HomeContainer>
        )}
      </AppContainer>
    )
  }
}

Home.contextType = FormDataContext

export default Home
