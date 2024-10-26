import style from './Catalog.module.css'
import { Card } from '../CardComponent/Card'
import { Category } from '../CategoryComponent/CategoryComponent'
import { products } from '../../data/data'
import { Search } from '../SearchComponent/SearchComponent'
import { useState } from 'react'

export function Catalog() {
    const [query, setQuery] = useState('');
    function handleChange(e) {
        setQuery(e.target.value);
    }
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase());
    })
    return (
        <>
            <div className={style.catalog}>
                <p className={style.catalog_title}>Каталог товаров</p>
                <div className={style.categories}>
                    <Category />
                </div>
                <Search handleChange={handleChange} />
            </div>
            <div className={style.catalog_grid}>
                {
                    filteredProducts.length ?
                        filteredProducts.map((product) => {
                            return (
                                <Card {...product} />
                            )
                        })
                        :
                        <p className="error">Ничего не найдено по запросу "{query}"</p>
                }
            </div>
        </>
    )
}