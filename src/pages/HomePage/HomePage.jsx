import style from './HomePage.module.css'
import { Banner } from '../../components/BannerComponent/BannerComponent';
import { Catalog } from '../../components/CatalogComponent/Catalog'


export function HomePage() {
    return (
        <>
            <Banner />
            <div className="mt110">
                <div className='container'>
                    <Catalog />
                </div>
            </div>
        </>
    )
}