
import BarraMenu from "../components/BarraMenu";
import LateralMenu from "../components/LateralMenu";

function Layout({children}){
    return(
        <div >
            <div className = "section" class="fixed-top">

                <BarraMenu/>
                <LateralMenu/>
                
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout;