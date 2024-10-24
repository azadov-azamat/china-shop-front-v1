import {LayoutProps} from "./layout.props";

function Layout({children}: LayoutProps): JSX.Element {

    return (
        <div className={'max-w-md mx-auto  flex relative w-full h-auto justify-center items-center'}>
            <div className={'flex flex-col relative w-full h-auto container'}>
                <main className={'w-full h-auto '}>
                    {children}
                </main>
            </div>
        </div>
    );
}

export default Layout;