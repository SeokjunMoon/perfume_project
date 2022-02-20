import React from "react"
import styles from './recipe.module.css'
import Layout from '../../components/main_layout/Layout'
import ToggleButton from '../../components/brand_perfume_toggle/Toggle'
import FragranceBlock from "../../components/FragranceBlock/FragranceBlock"


const recipe = () => {

    const ProductsRecipes = [
        [1,"조말론","블랙베리앤베어코롱","블랙베리","월계수","시더우드"  ],
        [2,"조말론","라임 바질 앤 만다린 코롱","만다린","바질","앰버"  ],
        [3,"조말론","우드 세이지 앤 씨 솔트 코롱","암브레트 씨","씨 솔트","세이지"  ],
        [4,"샤넬","No.5","일랑일랑, 네롤리, 레몬, 베르가못","자스민, 로즈, 아이리스, 은방울 꽃","바닐라, 샌달우드, 베티버, 파출리, 머스크, 오크모스, 앰버"  ],
        [5,"샤넬","블루드 샤넬","너트맥, 진저, 파출리, 샌달우드","페퍼민트, 자몽, 레몬, 베티버, 자스민","시더우드, 핑크페퍼"  ],
        [6,"샤넬","샹스 오 땅드르","자몽, 퀸스","히아신스, 자스민","시더우드, 앰버, 머스크, 아이리스"  ],
        [7,"딥디크","도손","아이리스, 로즈, 오렌지 꽃","튜베로즈, 핑크페퍼","벤조인, 머스크"  ],
        [8,"딥디크","오 데 썽","비터오렌지","주니퍼베리, 오렌지 꽃","파출리"  ],
        [9,"딥디크","오 드 퍼퓸 오르페옹","주니퍼베리","자스민","시더우드, 통카빈"  ]
    ];

    const Brands = [];


    const IconStyle = {
        margin: '4px 4px'
    };


    return (
        <Layout>
            <div className={styles.container}>
                <div style={{margin: '0 20px'}}>
                    <div className={styles.title}>Brand Perfume Recipes</div>

                    <div className={styles.search}>
                        <span className="material-icons" style={IconStyle}>search</span>
                        <input type='search' id='input-search' className={styles.searchArea} placeholder='찾고 싶은 향수를 검색하세요'/>
                        <button className={styles.enter}>Enter</button>
                    </div>

                    {
                        ProductsRecipes.map( (e, index) => {
                            const note = {
                                top: e[3].split(', '),
                                middle: e[4].split(', '),
                                base: e[5].split(', ')
                            };

                            return (
                                <div key={e[2]}>
                                    <ToggleButton title={e[1] + ' - ' + e[2]} id={e[2]} onClick={ (event, toggled, id) => {
                                        const note_grid = document.getElementById('note-grid-' + e[2]);
                                        if (toggled) {
                                            note_grid.style.height = '0';
                                        }
                                        else {
                                            note_grid.style.height = '100%';
                                        }
                                    }}/>
                                    <div className={styles.note_grid} id={'note-grid-' + e[2]}>
                                        <div style={{marginTop: '30px'}}>
                                            <span>탑 노트</span>
                                            <div className={styles.note_list}>
                                                {
                                                    note.top.map( e => {
                                                        return (
                                                            <FragranceBlock title={e} id={e} onClick={ (event, id, clicked) => {}} style={{margin: '0 10px'}}/>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div style={{marginTop: '30px'}}>
                                            <span>미들 노트</span>
                                            <div className={styles.note_list}>
                                                {
                                                    note.middle.map( e => {
                                                        return (
                                                            <FragranceBlock title={e} id={e} onClick={ (event, id, clicked) => {}} style={{margin: '0 10px'}}/>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div style={{marginTop: '30px'}}>
                                            <span>베이스 노트</span>
                                            <div className={styles.note_list}>
                                                {
                                                    note.base.map( e => {
                                                        return (
                                                            <FragranceBlock title={e} id={e} onClick={ (event, id, clicked) => {}} style={{margin: '0 10px'}}/>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    )
}

export default recipe