
import LateralMenu from "../components/LateralMenu";

function Layout({children}){
    return(
        <div>
            <div className = "container">
                
                <LateralMenu/>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout;