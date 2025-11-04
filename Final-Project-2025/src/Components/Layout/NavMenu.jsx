import { Link } from `react`;

export default function NavMenu() {

     return (
        <div className="nav-menu">
            <Link className="link" to="/">
                Home
            </Link>
            <Link className="link" to="/WishList">
                WishList
            </Link>
            <Link className="link" to="/Settings">
                Settings
            </Link>
            <Link className="link" to="/Profile">
                Profile
            </Link>
        </div>
    );
};
