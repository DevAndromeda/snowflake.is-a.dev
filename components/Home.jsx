import { Component } from "react";
import Stats from "./Stats";

export default class Home extends Component {

    constructor(...props) {
        super(...props);

        this.state = {
            user: null,
            error: false
        };
    }

    componentDidMount() {
        if (!this.state.user) {
            fetch("https://api.github.com/users/devandromeda")
                .then(res => res.json())
                .then(user => this.setState({ user, error: false }))
                .catch(e => this.setState({ user: null, error: true }));
        }
    }

    render() {
        return (
            <div className="b">
                <div className="head mt-5">
                    <img src={this.state.user?.avatar_url ?? "https://avatars1.githubusercontent.com/devandromeda"} className="logo" alt="logo" draggable="false" />
                </div>
                <h1 className="text-center mt-4 textheader">{ this.state.user?.name ?? "and" }</h1>
                <p className="text-center text-white">{(!this.state.user && this.state.error) ? "Loading Error!" : this.state.user?.bio ?? "Loading..."}</p>
                <div className="buttonsholder mt-2">
                    <a href="https://discord.snowflakedev.xyz" className="btn btn-lg buttons red text-white">Discord</a>
                    <a href="https://github.com/Snowflake107" className="btn btn-lg buttons blurple text-white">GitHub</a>
                </div>
                {
                    this.state.user ? <div className="stats">
                        <Stats data={[
                            {
                                title: "Followers",
                                value: this.state.user.followers.toLocaleString()
                            },
                            {
                                title: "Following",
                                value: this.state.user.following.toLocaleString()
                            },
                            {
                                title: "Public Repos",
                                value: this.state.user.public_repos.toLocaleString()
                            },
                            {
                                title: "Location",
                                value: this.state.user.location ?? "Earth"
                            },
                            {
                                title: "Joined GitHub",
                                value: new Date(this.state.user.created_at).toUTCString()
                            }
                        ]} />
                    </div> : null
                }
            </div>
        );
    }
}
