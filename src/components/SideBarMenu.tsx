import '../style/SideBarMenu.scss';

function hideSideBar() {
    document.querySelectorAll(".sideBarComponent")?.forEach((component) => {
        component.classList.remove("showSideBar");
    });
}

export default function SideBarMenu() {
    return (
        <aside className="sideBar sideBarComponent">
            <header>
                <div className="headerInner">
                    <button className="responsiveMenuToggle" onClick={ hideSideBar }>
                        <svg viewBox="0 0 100 63">
                            <rect x="20" width="60" y="15" height="1" />
                            <rect x="20" width="60" y="31" height="1" />
                            <rect x="20" width="60" y="47" height="1" />
                        </svg>
                    </button>
                </div>
            </header>
            <div className="sideBarContents">
                <nav>
                    <button>Home</button>
                    <button>Skills</button>
                    <button>Portfolio</button>
                    <button>Contact</button>
                </nav>
                <div>
                    <a target="_blank" rel="noopener noreferrer" href="" className="sideBarOption">Resumé</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/RunItBack1127/portfolio-website-react" className="sideBarOption githubOption">Source on GitHub</a>
                </div>
            </div>
        </aside>
    )
}