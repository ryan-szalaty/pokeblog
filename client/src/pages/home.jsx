import News from "../components/news";
import Blog from "../components/blog";
import Pokedex from "../components/pokedex";

function Homepage() {
    return (
        <div>
            <h1>This is the homepage!</h1>
            <div>
                <News />
                <Blog />
                <Pokedex />
            </div>
        </div>

    )
}

export default Homepage;