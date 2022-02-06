import React from 'react'
import styles from './FragranceComponentPage.module.css'
import BottleImg from '../../images/bottle_empty.png'
import FlatButton from '../../components/flat_button/FlatButton';


const FragranceComponentPage = () => {

    const CloseButtonStyle = {
        position: 'absolute',
        right: 0,
        margin: '36px 36px',
        color: '#2C6E49'
    };

    
    let currentNote = 'top';
    const BottleProgress = {
        TOP: 0,
        MIDDLE: 0,
        BASE: 0,
        MAX: 50
    };
    
    
    const COLOR = {
        TOP: 'rgba(253, 151, 129, 0.8)',
        MIDDLE: 'rgba(246, 231, 203, 0.8)',
        BASE: 'rgba(166, 196, 138, 0.8)'
    };
    Object.freeze(COLOR);
    
    
    const onNavClickListener = (event) => {
        const top = document.getElementById('top');
        const middle = document.getElementById('middle');
        const base = document.getElementById('base');

        top.style.borderBottom = '4px solid #FEFEE3';
        middle.style.borderBottom = '4px solid #FEFEE3';
        base.style.borderBottom = '4px solid #FEFEE3';

        event.target.style.borderBottom = '4px solid #2C6E49';
        currentNote = event.target.id;
    };

    /* 
    * 1ml 당 5px 
    * 탑노트: 최대 15
    * 미들노트: 최대 25
    * 배이스노트: 최대 10
    * 합해서 50
    */
    const AddToBottleListener = (event, type) => {
        if (type === 0) {
            BottleProgress.TOP = 0;
            BottleProgress.MIDDLE = 0;
            BottleProgress.BASE = 0;

            const top_span = document.getElementById('top-span');
            const middle_span = document.getElementById('middle-span');
            const base_span = document.getElementById('base-span');

            top_span.style.height = 0;
            middle_span.style.height = 0;
            base_span.style.height = 0;
        }

        else {
            switch(currentNote) {
                case 'top':
                    if (BottleProgress.TOP + type <= 15) {
                        const top_span = document.getElementById('top-span');
                        top_span.style.height = (BottleProgress.TOP + type) * 6 + 'px';
                        BottleProgress.TOP += type;
                    }
                    break;
                case 'middle':
                    if (BottleProgress.MIDDLE + type <= 25) {
                        const middle_span = document.getElementById('middle-span');
                        middle_span.style.height = (BottleProgress.MIDDLE + type) * 6 + 'px';
                        BottleProgress.MIDDLE += type;
                    }
                    break;
                case 'base':
                    if (BottleProgress.BASE + type <= 10) {
                        const base_span = document.getElementById('base-span');
                        base_span.style.height = (BottleProgress.BASE + type) * 6 + 'px';
                        BottleProgress.BASE += type;
                    }
                    break;
            }
        }
    };


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>Blooming fragrance</div>

                <div className={styles.comments} id='pw'>

                    <span className="material-icons" style={CloseButtonStyle} onClick={(event) => {
                        const popup = document.getElementById('pw');
                        popup.style.display = 'none';
                    }}>close</span>
                    <div className={styles.PopupWindow}>
                        <div>
                            <div style={{fontSize: '30px'}}>Fragrance Component</div>
                            <div style={{fontSize: '22px'}}>향수는 top note, middle note, base note로 구성되어 있습니다.</div>
                        </div>

                        <div className={styles.NoteInfo}>
                            <div className={styles.NoteName} style={{backgroundColor: '#FD9781'}}>Top note</div>
                            <div className={styles.descriptions}>탑노트는 가장 처음 맡게 되는 향입니다.<br/>
                                향수를 뿌린 직후부터 알코올이 날라간 10분 전후의 향을 말하므로 향수의 첫인상을 결정하는 향입니다.<br/>
                                향수의 5~10%를 블랜딩 비율로 갖습니다.</div>
                        </div>

                        <div className={styles.NoteInfo}>
                            <div className={styles.NoteName} style={{backgroundColor: '#F6E7CB'}}>Middle note</div>
                            <div className={styles.descriptions}>미들노트는 알코올이 날아간 후에 맡게 되는 향입니다.<br/>
                                향수를 뿌린 후, 1시간 전후의 향을 말합니다.<br/>
                                향이 안정적이며, 다른 향과의 배합이 어우러져 풍부하고 육감적인 향이 지속됩니다.<br/>
                                보통 주위사람들이 느끼는 향과 가장 비슷합니다.
                                향수의 50~80%를 블랜딩 비율로 갖습니다.</div>
                        </div>

                        <div className={styles.NoteInfo}>
                            <div className={styles.NoteName} style={{backgroundColor: '#A6C48A'}}>Base note</div>
                            <div className={styles.descriptions}>베이스노트는 모든 향이 다 날아간 후에 맡는 향입니다.<br/>
                                향수를 뿌린 후 2~3시간 전후까지 지속됩니다.</div>
                        </div>
                    </div>                        
                </div>

                <div className={styles.contents}>
                    
                    <div className={styles.leftContents}>
                        <div className={styles.bottleDiv}>
                            <img src={BottleImg} alt='bottle image' className={styles.bottle}/>
                            <div style={{fontSize: '32px', margin: '16px auto 5px auto'}}>50ml / 0ml</div>
                            <div style={{fontSize: '16px', height: '50px'}}>* 상기 용량은 향수 종류에 따라 달라질 수 있습니다.</div>
                            <div className={styles.contentspan}>
                                <span className={styles.inBottle} id='top-span' style={{backgroundColor: COLOR.TOP}}></span>
                                <span className={styles.inBottle} id='middle-span' style={{backgroundColor: COLOR.MIDDLE}}></span>
                                <span className={styles.inBottle} id='base-span' style={{backgroundColor: COLOR.BASE}}></span>
                            </div>
                        </div>

                        <nav className={styles.buttons}>
                            <FlatButton color='#FFC9B9' highlight='#FFFFFF' style={{fontSize: '24px', width: '110px', lineHeight: '36px'}} onClick={(event) => AddToBottleListener(event, 5)}>+ 5ml</FlatButton>
                            <FlatButton color='#FFC9B9' highlight='#FFFFFF' style={{fontSize: '24px', width: '110px', lineHeight: '36px'}} onClick={(event) => AddToBottleListener(event, 1)}>+ 1ml</FlatButton>
                            <FlatButton color='#DD9787' highlight='#FFFFFF' style={{fontSize: '24px', width: '110px', lineHeight: '36px'}} onClick={(event) => AddToBottleListener(event, -5)}>- 5ml</FlatButton>
                            <FlatButton color='#DD9787' highlight='#FFFFFF' style={{fontSize: '24px', width: '110px', lineHeight: '36px'}} onClick={(event) => AddToBottleListener(event, -1)}>- 1ml</FlatButton>
                            <FlatButton color='#74D3AE' highlight='#FFFFFF' style={{fontSize: '24px', width: '110px', lineHeight: '36px'}} onClick={(event) => AddToBottleListener(event, 0)}>refresh</FlatButton>
                        </nav>
                    </div>

                    <div className={styles.making}>
                            <nav className={styles.makingNav}>
                                <div className={styles.NavItems} id='top' onClick={(event) => onNavClickListener(event)} style={{borderBottom: '4px solid #2C6E49'}}>Top note</div>
                                <div className={styles.NavItems} id='middle' onClick={(event) => onNavClickListener(event)}>Middle note</div>
                                <div className={styles.NavItems} id='base' onClick={(event) => onNavClickListener(event)}>Base note</div>
                            </nav>

                            <div className={styles.NoteDescription}>
                                <div className={styles.currentTitle} style={{fontSize: '26px', paddingBottom: '10px', fontWeight: '600'}}>탑노트란?</div>
                                <div className={styles.currentDescription} style={{fontSize: '18px'}}>뿌린 뒤 10분 전후에 나타나는 향으로 향의 첫인상을 결정합니다.<br/>향 정류를 선택하여 나만의 향수를 만들어 보세요!</div>
                            </div>

                            <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: '18px', padding: '8px 8px', margin: '10px 10px 10px 0'}}>
                                <span class="material-icons">search</span>
                                <input type='search' id='input-search' className={styles.searchArea} placeholder='찾고 싶은 향료를 검색하세요'/>
                                <button style={{border: 'none', borderRadius: '10px', color: '#054A29', backgroundColor: '#FDFDFD', fontSize: '18px', padding: '6px 12px', boxShadow: '2px 2px 2px 0px #F5F5F5, 2px -2px 2px 0px #F5F5F5'}}>Enter</button>
                                </div>
                                <button className={styles.filterButton}><span className="material-icons">expand_more</span>계열 &nbsp;</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FragranceComponentPage