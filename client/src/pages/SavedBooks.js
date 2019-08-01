import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container} from "../components/Grid";
import SavedResult from "../components/SavedResults"
import bgImg from "../img/bgImg.jpg";

// const bgImgStyle = {
//     backgroundImage :  `url(${bgImg})`
// }
class SaveBook extends Component {
    state = {
        savedBooks: []
    };


    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({ savedBooks: res.data }))
            .catch(err => console.log(err))
    }


    handleDeleteButton = id => {
        API.deleteBook(id)
            .then(res => this.componentDidMount())
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="searchBooksPage" style={bgImgStyle}>
            <Container fluid>
                <Jumbotron fluid>
                <h1 className="text-white">Saved Books</h1>
                </Jumbotron>

                <Container>
                    <SavedResult savedBooks={this.state.savedBooks} handleDeleteButton={this.handleDeleteButton} />
                </Container>
            </Container>
            </div>
        )
    }
}



export default SaveBook
