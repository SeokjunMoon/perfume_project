import React, { useState } from 'react'
import styles from './FragranceComponentPage.module.css'
import BottleImg from '../../images/bottle_empty.png'
import FlatButton from '../../components/flat_button/FlatButton'
import Layout from '../../components/main_layout/Layout'
import FragranceBlock from '../../components/FragranceBlock/FragranceBlock'
import FinishBottleImg from '../../images/bottle_color.png'
import { useLocation } from 'react-router-dom'


const FragranceComponentPage = () => {

    const location = useLocation();
    const { type } = location.state;
    const { name } = location.state;
    const { note_info } = location.state;

    const init = {
        fragrance: {
            top: '',
            middle: '',
            base: ''
        },
        progress: {
            top: 0,
            middle: 0,
            base: 0
        }
    };

    if (type == 'brand') {
        note_info.top.forEach( (e, index) => {
            let ttt = Math.floor(15 / note_info.top.length);
            init.fragrance.top += '' + (e) + '.' + ttt + (index != note_info.top.length? '/' : '');
            init.progress.top += ttt;
        });
        note_info.middle.forEach( (e, index) => {
            let ttt = Math.floor(25 / note_info.middle.length);
            init.fragrance.middle += '' + (e) + '.' + ttt + (index != note_info.middle.length? '/' : '');
            init.progress.middle += ttt;
        });
        note_info.base.forEach( (e, index) => {
            let ttt = Math.floor(10 / note_info.base.length);
            init.fragrance.base += '' + (e) + '.' + ttt + (index != note_info.base.length? '/' : '');
            init.progress.base += ttt;
        });
    }


    const [ currentNote, setCurrentNote ] = useState('top');
    const [ topFragrances, setTopFragrance ] = useState(init.fragrance.top);
    const [ middleFragrances, setMiddleFragrance ] = useState(init.fragrance.middle);
    const [ baseFragrances, setBaseFragrance ] = useState(init.fragrance.base);
    const [ progressTop, setTopProgress ] = useState(init.progress.top);
    const [ progressMiddle, setMiddleProgress ] = useState(init.progress.middle);
    const [ progressBase, setBaseProgress ] = useState(init.progress.base);
    
    const [ clickedFragrance, setClickedFragrance ] = useState('');
    const [ clickedOffset, setClickedOffset ] = useState(0);
    const [ view, setView ] = useState('');


    React.useEffect(() => {
        if (type == 'brand' || type == 'making') {
            document.getElementById('pw').style.display = 'none';

            const currentWindowWidth = window.innerWidth;
            const top_span = document.getElementById('top-span');
            const middle_span = document.getElementById('middle-span');
            const base_span = document.getElementById('base-span');

            let hp;
            if (currentWindowWidth >= 1120) hp = 5.88;
            else if (currentWindowWidth < 1120 && currentWindowWidth >=  670) hp = 4.4;
            else hp = 2.6;

            top_span.style.height = (progressTop) * hp + 'px';
            middle_span.style.height = (progressMiddle) * hp + 'px';
            base_span.style.height = (progressBase) * hp + 'px';
        }
    })

    const CloseButtonStyle = {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: '24px 24px',
        color: '#2C6E49',
        cursor: 'pointer',
        zIndex: 3
    };

    const BottleProgress = {
        MAX: 50
    };
    
    
    const COLOR = {
        TOP: 'rgba(253, 151, 129, 0.8)',
        MIDDLE: 'rgba(246, 231, 203, 0.8)',
        BASE: 'rgba(166, 196, 138, 0.8)'
    };
    Object.freeze(COLOR);
    
    
    const onNavClickListener = (event) => {
        document.getElementById('top').style.borderBottom = '4px solid #FEFEE3';
        document.getElementById('middle').style.borderBottom = '4px solid #FEFEE3';
        document.getElementById('base').style.borderBottom = '4px solid #FEFEE3';

        event.target.style.borderBottom = '4px solid #2C6E49';
        setCurrentNote('' + event.target.id);

        const note_title = document.getElementById('current-note-title');
        const note_description = document.getElementById('current-note-description');
        const note_milli = document.getElementById('note-milli');

        switch(currentNote) {
            case 'top':
                note_title.innerHTML = '탑노트';
                note_description.innerHTML = '10분 전후에 나타나는 향으로 향의 첫인상을 결정합니다.\n향료를 선택하여 나만의 향수를 만들어보세요!';
                note_milli.innerHTML = '(5~20ml)';
                break;
            case 'middle':
                note_title.innerHTML = '미들노트';
                note_description.innerHTML = '2~3시간 전후에 나타나는 향으로 향수 주제를 결정합니다.\n향료를 선택하여 나만의 향수를 만들어보세요!';
                note_milli.innerHTML = '(50~80ml)';
                break;
            case 'base':
                note_title.innerHTML = '베이스노트';
                note_description.innerHTML = '1시간 전후에 나타나는 향으로 잔향을 결정합니다.\n향료를 선택하여 나만의 향수를 만들어보세요!';
                note_milli.innerHTML = '(50~80ml)';
                break;
        }
    };

    /* 
    * 1ml 당 5px 
    * 탑노트: 최대 15
    * 미들노트: 최대 25
    * 배이스노트: 최대 10
    * 합해서 50
    */
    const AddToBottleListener = (event, type) => {

        const top_span = document.getElementById('top-span');
        const middle_span = document.getElementById('middle-span');
        const base_span = document.getElementById('base-span');

        if (type === 0) {
            setTopProgress(0);
            setMiddleProgress(0);
            setBaseProgress(0);

            setTopFragrance('');
            setMiddleFragrance('');
            setBaseFragrance('');

            top_span.style.height = 0;
            middle_span.style.height = 0;
            base_span.style.height = 0;
        }

        else {
            const currentWindowWidth = window.innerWidth;
            let hp;
            if (currentWindowWidth >= 1120) hp = 5.88;
            else if (currentWindowWidth < 1120 && currentWindowWidth >=  670) hp = 4.4;
            else hp = 2.6;

            switch(currentNote) {
                case 'top':
                    if (progressTop + type <= 15 && progressTop + type >= 0) {
                        if (topFragrances.indexOf(clickedFragrance) == -1 && type < 0) {
                            alert('추가하지 않는 향료입니다');
                            return;
                        }
                        if (topFragrances.indexOf(clickedFragrance) != -1) {
                            topFragrances.split()
                        }
                        top_span.style.height = (progressTop + type) * hp + 'px';
                        setTopProgress(progressTop + type);
                        if (topFragrances.indexOf(clickedFragrance) == -1) {
                            setTopFragrance(topFragrances + '/' + clickedFragrance + '.' + type);
                        }
                        else {
                            let tmp = topFragrances.split('/').map( e => {
                                let ssp = e.split('.');
                                if (ssp[0] == clickedFragrance) {
                                    return (ssp[0] + '.' + (parseInt(ssp[1]) + type));
                                }
                                return e;
                            });
                            setTopFragrance(tmp.join('/'));
                        }
                    }
                    break;
                case 'middle':
                    if (progressMiddle + type <= 25 && progressMiddle + type >= 0) {
                        middle_span.style.height = (progressMiddle + type) * hp + 'px';
                        setMiddleProgress(progressMiddle + type);
                        if (middleFragrances.indexOf(clickedFragrance) == -1) {
                            setMiddleFragrance(middleFragrances + '/' + clickedFragrance + '.' + type);
                        }
                        else {
                            let tmp = middleFragrances.split('/').map( e => {
                                let ssp = e.split('.');
                                if (ssp[0] == clickedFragrance) {
                                    return (ssp[0] + '.' + (parseInt(ssp[1]) + type));
                                }
                                return e;
                            });
                            setMiddleFragrance(tmp.join('/'));
                        }
                    }
                    break;
                case 'base':
                    if (progressBase + type <= 10 && progressBase + type >= 0) {
                        base_span.style.height = (progressBase + type) * hp + 'px';
                        setBaseProgress(progressBase + type);
                        if (baseFragrances.indexOf(clickedFragrance) == -1) {
                            setBaseFragrance(baseFragrances + '/' + clickedFragrance + '.' + type);
                        }
                        else {
                            let tmp = baseFragrances.split('/').map( e => {
                                let ssp = e.split('.');
                                if (ssp[0] == clickedFragrance) {
                                    return (ssp[0] + '.' + (parseInt(ssp[1]) + type));
                                }
                                return e;
                            });
                            setBaseFragrance(tmp.join('/'));
                        }
                    }
                    break;
            }
        }
    };

    const FragrancesList = [ //top, middle, base 순서
        [1,"만다린","달콤하고 새콤한 귤의 향","만다린은 시트러스 계열입니다. 흔히 생각하는 귤의 이미지로 워터링 + 스윗함 + 새콤함을 가지고 있는 향료입니다.\n향을 전반적으로 밝게 만들어 주기 때문에 밝고 가벼운 분위기의 향에 어울립니다. 특유의 스윗한 느낌은 Spicy 계열과 조합이 좋습니다.\n특히, 샌달우드, 파출리, 레몬처럼 상큼함과 시원함을 가지고 있는 향들과 잘 어울립니다.","불가리 - 아쿠아 아마라, 루이비통 - 에프터눈 스웜, 캘리포니아 드림","Citrus","top"  ],
        [2,"스윗오렌지","상큼한 오렌지 향","스윗오렌지는 시트러스 계열입니다. 상큼한 오렌지 향으로 오렌지 껍질을 벗겨낼 때 나는 향과 비슷합니다.\n가볍고 상큼한 플로럴 향이라 톡톡 튀는 느낌을 주고 싶을 때 사용하면 좋습니다. 특히, Spicy 계열, 우드 계열과 조합이 좋습니다.","데메테르 - 스윗 오렌지, 센트세이 - 스윗 오렌지 퍼퓸","Citrus","top"  ],
        [3,"탠저린","새콤탈콤하고 따뜻한 향","탠저린은 시트러스 계열입니다. 귤 껍질에서 나는 향과 비슷하여 만다린 보다 조금 더 달콤한 향입니다.\n따뜻한 느낌의 상큼향 향으로, 밝지만 차분한 느낌을 주고 싶을 때 사용하면 좋습니다. 플로럴 계열, 우드 계열과 조화가 좋습니다.","루이비통 - 르 주르 셀레브, 끌로에 - 로즈탠저리","Citrus","top"  ],
        [4,"유칼립투스","코를 뚫어주는 시원한 향","유칼립투스는 허벌 계열입니다. 숲 속에 들어온 것 같은 느낌의 시원한 향입니다.\n향 특성에 따라, 수험생이나 비염환자들에게 편안함을 느끼게 해주는 용도로 많이 사용됩니다. 특히, 민트향과 많이 사용되는 향입니다. 시트러스 계열, 우드 계열의 향료와 잘 어울립니다.","톰 포드 - 뷰티 만다리노 디 아말피 아쿠아, 데메테르 - Steam Room","Herbal","top"  ],
        [5,"네롤리","우아하고 매혹적인 꽃 향","네롤리는 시트러스 계열입니다. 아카시아 꽃 향기와 비슷한, 은은하게 달콤한 향입니다.\n네롤리는 비터 오렌지 꽃에서 추출한 오일로 꽃이 피고 톡 쏘는 달콤한 향은 감귤과 향신료를 연상시킵니다. 네롤리 향의 30% 이상은 리날룰(linalool)이라는 성분이 차지하고 있는데 라벤더와 베르가뭇에도 \n들어가 있는 성분으로 비슷한 허브 느낌을 받을 수 있습니다. 특히 Spicy 계열과 조화가 좋은 편입니다.","데메테르 - 네롤리, 자라 - LXXXV, 조말론 런던 - 오렌지 블라썸","Citrus","top"  ],
        [6,"윈터그린","상쾌하고 시원한 향","윈터그린은 프루티 계열입니다. 특유의 시원하고 상쾌한 향기를 특징으로 가져 껌이나 치약 등에 자주 사용되는 향입니다.\n작은 상록의 허브가 갖는 다육질의 주황 열매가 윈터그린 입니다. 우드 계열과 잘 어울리며 특히, 허브 향과 조화가 좋습니다.","None","Fruity","top"  ],
        [7,"페퍼민트","목을 상쾌하게 해주는 강한 느낌의 향","페퍼민트는 허벌 계열입니다. 산뜻하고 투명한 듯한 청량감이 있는 풍미를 가지고 있습니다.\n페퍼민트는 일상에서 많이 쓰이는 향으로 '치약 향'이라고 불리기도 합니다. 주성분인 멘톨은 향균과 정신적 피로에도 도움을 줍니다. 우드 계열과도 잘 어울리며 레몬의 시트러스와 로즈마리, \n유칼립투스의 허브와도 잘 어울려 여름에 쓰기 좋은 향을 만들어 냅니다.","조말론 - 우드세이지, 록시땅 - 버베나","Herbal","top"  ],
        [8,"레몬그라스","달콤한 레몬향","레몬그라스는 풀 향의 우드 계열입니다. 은은한 풀 냄새에 레몬 향이 섞인 듯한 향이 납니다.\n레몬 향이 나는 허브로 잎과 줄기를 비벼서 나오는 향을 추출한 것입니다. 시트러스 계열, 플로럴 계열과 조합이 좋습니다.","불리 - 발팽송의 목욕하는 여인, 지땅느 - 시트로넬라 시트러스","Woody","top"  ],
        [9,"그레이프후르츠","상쾌한 감귤계의 향","그레이프후르츠는 시트러스 계열입니다. 자몽 특유의 쓴 느낌과 오렌지의 달달한 느낌이 합쳐져 상쾌한 과일향을 만들어 냅니다.\n과일 향을 좋아하시는 분들께 추천드리는 향입니다. 플로럴 향과의 조화가 잘 어울립니다.","캐스키드슨 - 그레이프후르츠, 러쉬 - 비 센트","Citrus","top"  ],
        [10,"주니퍼베리","신선한 솔잎 향","주니퍼베리는 프루티, 우드 계열입니다. 솔잎과 같이 가별고 날카로우며 신선한 나무 향이 납니다.\n상쾌한 우디향에 쓴 맛과 단 맛도 조화롭게 섞여 신선한 나무 냄새와 같은 솔향을 가집니다. 우드 계열과 잘 어울리는 편입니다.","구찌 - 아쿠아 디 피오리, 조말론 - 우드 세이지 앤 씨 솔트","Fruity","top"  ],
        [11,"아니스","달콤한 감초향","아니스는 달달한 감초 향입니다. 가벼우면서 입가에 아른거리는 달콤함이 느껴지는 향입니다. 부드러움 속에 생생한 풀잎의 향기와 같아서, \n향수 속에 숨어있는 달달한 향을 머금고 있는 듯한 느낌을 주는 향입니다. 여러 향료들을 조화롭게 해주는 역할로 보통 사용되며 우드 계열과 달달한 Spicy 계열이 잘 어울립니다.","조말론 - 바닐라 앤 아니스","Spicy","top"  ],
        [12,"안젤리카","신선하고 달콤한 페퍼의 향","안젤리카는 Spicy 계열입니다. 달콤하면서 쌉싸름하여 세련되고 관능적인 특징을 가지고 있습니다.\n상쾌하고 가벼운 후추를 닮은 향입니다. 우드 향과 조화가 좋습니다.","조말론 - 튜베로즈 안젤리카 인텐스","Spicy","top"  ],
        [13,"라임","떫은 듯 하면서 달콤한 향","라임은 시트러스 계열입니다. 자연스럽고 신선한 향으로 워터리한 느낌을 주어 청량감을 표현하기에 좋습니다.\n밝고 상쾌한 느낌을 가지고 있어 향료로 많이 사용됩니다. 플로럴 계열, 우드 계열, 아쿠아틱 계열과 잘 어울립니다.","조말론 - 라임 바질 앤 만다린, 조말론 - 엔젤 슈래저 오렌지 우드","Citrus","top"  ],
        [14,"베르가못","살짝 쓴 시큼한 향","베르가못은 시트러스 계열입니다. 꽃내음이 나는 과일향의 특성을 지니고 있습니다. 섬세하고 신선한 향으로 식물 고유의 상큼함과 화사함이 포함되어 있습니다.\n진정 성분인 에스테르 성분이 함유되어 있슶니다. 특유의 톡 쏘는 느낌은 Spicy 계열과 잘 어울립니다.","로얄워터 퓨어 머스트, 르 라보 베르가못22","Citrus","top"  ],
        [15,"크랜베리","새콤하면서 달콤한 향","크랜베리는 시트러스 계열입니다. 상큼하면서 약간 씁씁한 자몽의 향을 가지고 있습니다. \n새콤하고 달콤한 향이 은은하게 나와 플로럴 계열, 머스크 계열과 잘 어울립니다.","데메테스 - 크랜베리, 구찌 - 알케미스트 가든","Citrus","top"  ],
        [16,"암브레트 씨","달콤하면서 사향이 느껴지는 향","암브레트 씨는 머스크 계열입니다. 달콤하면서 사향이 느껴지는 머스키한 향입니다. 암브레트는 인도 열대지방에 자생하는 말바과 식물의 꽃과 \n씨앗에서 추출한 향입니다. 머스크 말로라고도 알려진 이 독특한 향은 달콤하고 톡 쏘며, 사향과 호박의 존재를 연상시킵니다.","조말론 - 우드 세이지 앤 씨 솔트, 디올 - Dior Homme Intense 2011","Musk","top"  ],
        [17,"씨 솔트","해변의 아침 산책향","씨 솔트는 아쿠아 계열입니다. 이름 그대로 바다가 떠오르는 짭쪼름한 향을 가지고 있습니다. 씨 솔트의 향은 시원한 바람이 부는 바다를 떠오르게 합니다. \n이 독특한 향기는 해변의 아침 산책을 떠올리게 합니다. 우드 계열과 함께 사용했을 때 우드 계열의 따뜻하고 무거운 느낌보다 밝고 시원한 느낌을 느낄 수 있습니다.","조말론 - 우드 세이지 앤 씨 솔트, 러쉬 - 솔티","Earthy","top"  ],
        [18,"레몬","새콤달콤하며 밝고 활기찬 향","레몬은 시트러스 계열입니다. 흔히 생각하는 레몬의 향으로 쓰고 달고 신, 상큼한 향기입니다. \n향기롭고 화창하며 감각을 상쾌하고 활기차게 하는 느낌을 가집니다. 특유의 산미가 생기 넘치는 아우라를 표현해 반짝반짝하고 깨끗한 느낌을 줍니다. 허벌 계열, 시트러스와 프루티 계열에 잘 어울립니다.","샤넬 - 블루 드 샤넬, 베르사체 - 뿌르 옴므 딜런 블루","Citrus","top"  ],
        [19,"오렌지 꽃","신선하고 달콤한 동물적인 향","오렌지 꽃은 시트러스 계열입니다. 달콤하고 따뜻한 향은 중독적인 느낌을 가지고 있습니다. 감귤나무과에 속하는 오렌지 나무의 흰 색 꽃에서 \n추출한 향료입니다. 네롤리보다 더 깊고, 플로럴하면서 동물적인 향기입니다. 특유의 동물적인 느낌은 페로몬을 표현하고자 할 때 사용합니다.","딥디크 - 도손, 딥디크 - 오 데 썽","Citrus","top"  ],
        [20,"배(페어)","달콤하고 신선한 과일 향","배(페어)는 프루티 계열입니다. 달콤하고 섬세하여 과일 다육을 묽게 표현한 향입니다. 장미과 나무와 관목의 열매에 대한 향기입니다. \n신선하고 깨끗한 향이 과즙의 감각을 일깨웁니다.","디올 - J'adore, 입생로랑 - Black Opuim","Fruity","top"  ],
        [21,"퀸스","새콤달콤하며 향긋한 과일 향","퀸스는 프루티 계열입니다. 새콤달콤하면서 상큼한 과일 향이 납니다. 퀸스는 마르멜로라고도 불리며 사과와 비슷한 향이 나지만 \n사과보다 진한 향이 특징입니다. 그리스인들은 결혼식에서의 '향기로운 첫키스'를 위해 퀸스 향을 이용했다고 합니다.","버버리 - My Burbeery for Women, 샤넬 - 샹스 오땅드로오 오드 빠르펭","Fruity","top"  ],
        [22,"비터오렌지","쌉쌀하고 스윗함을 가진 향","비터오렌지는 시트러스 계열입니다. 스윗오렌지의 달콤함과 그레이프후르츠 사이의 쌉쌀하고 스윗한 향을 가졌습니다. \n비터오렌지는 스윗오렌지보다 작고 어두은 열매를 맺고 향기로운 꽃이 핍니다. 신선한 오렌지의 향이 나나 스윗오렌지보다 건조한 향이 특징입니다. 플로럴과 가장 가까운 시트러스 향입니다.","조르지오 아르마니 - Armani Code for Women, 조말론 - 오렌지 필","Citrus","middle"  ],
        [23,"라벤더","은은하고 부드러운 신선함이 느껴지는 향","라벤더는 허벌 계열입니다. 꽃향기와 허브 계통의 풀향기가 섞인 부드러우면서도 상쾌한 느낌을 줍니다. 라벤더의 향은 플로럴과 허벌이 \n조화롭게 섞인 향이 특징입니다. 라벤더의 어원이 '씻다'를 의미하는 'Lavare'일 정도로 깨끗하고 청결한 이미지를 가지고 있습니다. 시트러스 계열, 우드 계열과도 궁합이 잘 맞습니다.","조말론 - 라벤더랜드, 랑세 - 르방케","Herbal","middle"  ],
        [24,"로즈제라늄","장미보다 강한 장미의 향","로즈제라늄은 플로럴, 허벌 계열입니다. 로즈의 향과 비슷하나 달콤한 허브 향을 베이스로 내는 향입니다. 잎과 줄기에 장미 향기가 나는 허브를 \n이용하여 만들어진 향료입니다. 플로럴 계열, 시트러스 계열과 잘 어울립니다.","입생로랑 - 몽 파리, 구찌 - 블룸","Herbal","middle"  ],
        [25,"시나몬","향이 강하고 정신을 맑게 해주는 향","시나몬은 스파이시 계열입니다. 달콤하고 따뜻한 느낌의 묵직한 향으로, 강한 향을 가지고 있습니다. 달콤한 느낌도 나지만 꽃 향기나 \n과일 향기에 비해 자극적인 느낌이 납니다. 스파이시하지만 묵직하면서 따뜻한 향은 정신을 맑게 해줍니다. 우드 계열, 플로럴 계열과 잘 어울립니다.","디코라 - 어반 시드니, 조르지오 아르마니 - 프리베 앙브르 이첸트리코","Spicy","middle"  ],
        [26,"카모마일","따뜻한 느낌의 꽃 약초 향","카모마일은 허벌 계열입니다. 따뜻하고 달콤한 느낌의 꽃 약초 향입니다. 상큼하고 달콤한 사과향과 흡사한 느낌을 가지고 있습니다. \n정신을 진정시켜 숙면을 유도하는 효과를 가지고 있는 향입니다. 어울리는 향은 플로럴 계열, 머스크 계열이 있습니다.","버버리 - 히어로, 조말론 - 우드 세이지 앤 씨 솔트","Herbal","middle"  ],
        [27,"미모사","은은하고 부드러우며 달콤하고 상쾌한 향","미모사는 플로럴 계열입니다. 달콤하고 부드러운 향으로 연질의 비누같은 느낌을 가지고 있습니다. 적섬유 유연제처럼 \n부드럽고 순한 느낌인 중간 톤의 향입니다. 많이 넣을 시 미모사 특유의 상쾌한 느낌이 더해집니다. 달달하면서 은은한 향은 봄과 특히 잘 어울립니다. 머스크 계열, 우드 계열과의 조화가 \n좋습니다.","조말론 - 미모사 앤 카다멈, 프라다 - 미모사","Floral","middle"  ],
        [28,"카렌듈라","은은하고 따뜻한 허브 향","카렌듈라는 허벌 계열입니다. 금잔화 종류로, 은은하고 따뜻한 허브 향입니다. 살구향이 나고 독특한 향을 이어주는 역할로써 많이 \n쓰입니다. 플로럴 계열, 시트러스 계열과 잘 어울립니다.","벨레다 - 카렌듈라 베이비 오일","Herbal","middle"  ],
        [29,"사이프러스","수풀에서 나는 신선하고 달콤한 향","사이프러스는 우드 계열입니다. 사이프러스는 상록수에서 추출한 향료로, 깨끗한 느낌의 아로마 향을 가지고 있습니다. \n특유의 솔잣나무 잎의 향기가 달콤한 수풀에 있는 것과 같은 느낌을 줍니다. 신선한 느낌은 우드 계열, 머스크 계열과 조화를 이룹니다.","루이비통 - On The Beach, \n조말론 - 우드 세이지 앤 씨 솔트","Woody","middle"  ],
        [30,"로즈마리","톡 쏘는 강한 느낌, 상쾌한 향","로즈마리는 허벌 계열입니다. 상큼하고 강한 허브 향을 가지고 있어 향신료로 많이 사용됩니다. 로즈마리는 라벤더와 함께 \n허브의 투탑으로 꼽히며 허브 향을 집약해서 모아둔 느낌입니다. 숲과 풀의 시원한 향이 나는데 민트의 톡 쏘는 매운 향과 다르게 달달한 느낌이 납니다. 플로럴 계열, 우드 계열과 \n잘 어울립니다.","입생로랑 - 몽 파리, 루이비통 - On The Beach","Herbal","middle"  ],
        [31,"바이올렛","달콤한 낙엽향","바이올렛은 플로럴 계열입니다. 깊이감 잇는 녹색의 천연 향기를 가지고 있습니다. 달콤한 낙엽향으로 깔끔하고 시원한 느낌을 가지고 있어 \n도시적인 스타일에 잘 어울립니다. 향의 배합에 따라 느낌이 크게 달라지는 향료로 자연의 느낌을 추가하고 싶을 때 넣으면 좋습니다. 그중에서도 플로럴 계열, 머스크 계열, 프루티 계열, \n우디 계열과의 조합을 추천합니다.","파코 - 라반 울트라 바이올렛, 구찌 - 알케미스트 버진 바이올렛","Floral","middle"  ],
        [32,"로즈","은은하면서도 향기로운 장미향","로즈는 플로럴 계열입니다. 붉은 장미 고유의 플로럴한 향이 은은하게 느껴집니다. 생화 장미다발이 내 앞에 있는 것과 같은 향으로 \n은은하면서 향기롭습니다. 시트러스 계열, 플로럴 계열과 조화가 좋습니다.","라리브 스왈로브스키 - 문 라이트, 피오라 - 러브포이즌","Floral","middle"  ],
        [33,"매그놀리아","온화하고 달콤한 꽃 향, 프루티한 느낌의 목련향","매그놀리아는 플로럴 계열입니다. 달콤한 꽃 향기와 프루티한 풀 향기가 같이 느껴지는 향입니다. \n안정과 편안함을 주는 향으로 진정 효과가 있습니다. 우드 계열, 시트러스 계열과 조화를 이룹니다.","페레데릭말 - 오드매그놀리아, 아쿠아 디 파르마 매그놀리아 노빌레","Floral","middle"  ],
        [34,"프리지아","싱그럽고 포근한 향","프리지아는 플로럴 계열입니다. 파우더리한 꽃 향기를 특징으로 가집니다. 포근한 꽃 향기가 풍성하게 나며 '리날리올'이라는 성분이 \n진정 효과를 줍니다. 시트러스 계열, 스파이시 계열과 잘 어울립니다.","조말론 - 잉글리쉬 페어 앤 프리지아, 산차마리아노벨라 - 아쿠아 디 콜","Floral","middle"  ],
        [35,"카네이션","은은하고 달콤한 꽃 향기, 살짝 매운향","카네이션은 플로럴 계열입니다. 약간 매큼한 뉘앙스의 은은하고 달콤한 꽃 향기를 가지고 있습니다. 특유의 살짝 튀는 \n꽃 향기는 시트러스 계열, 스파이시 계열과 조화가 좋습니다.","까르띠에 - Les Heures de Parfume, 나나리찌 - L'Air du Temps","Floral","middle"  ],
        [36,"아이리스","상큼하고 포근한 파우더 향, 비누 향","아이리스는 플로럴 계열입니다. 포근한 파우더와 비누 향을 가지고 있는 매우 플로럴한 향입니다. 무거운 느낌을 가지고 \n있어, 여성미, 성숙미를 표현하고자 할 때 많이 쓰이는 향입니다. 시트러스 계열, 머스크 계열과 잘 어울립니다.","프라다 - 레스 인퓨전 디 프라다 아이리스, \n샤넬 - No.19","Floral","middle"  ],
        [37,"클로브","매우면서 깔끔한 향","클로브는 스파이시 계열입니다. 향이 강력하여 향신료로 많이 사용되고 있습니다. 맵고 달고 따뜻하며 화하여 버건디 느낌의 향을 가지고 \n있습니다. 시트러스 계열, 플로럴 계열과의 조합이 좋고, 프루티 계열을 포인트로 같이 사용하는 경우도 있습니다.","루이비통 - On The Beach, 조말론 - 우드 세이지 앤 씨 솔트","Spicy","middle"  ],
        [38,"진저","달콤하면서 차분한 향, 톡 쏘는 향","진저는 스파이시 계열입니다. 생강향으로 달콤하면서도 톡 쏘는 매운 향을 가지고 있습니다. 향수 전반에 달콤함과 강렬함을 주기 \n위해 많이 쓰이는 향료입니다. 머스크 계열, 우디 계열과 잘 어울립니다.","루이비통 - Sympony, 조말론 - 다크앰버 앤 진저릴리","Spicy","middle"  ],
        [39,"카다멈","상쾌하고 자극적인 매운 향, 독특한 허브 향","카다멈은 허벌, 스파이시 계열입니다. 청량감이 있는 허브이기 때문에 상쾌한 매운 느낌의 향입니다. 생강 계열의 향신료로 \n쓰이며 특유의 풍부함을 가지고 있습니다. 이를 중화시키기 위한 수단으로 머스크 계열과 우디 계열이 같이 사용되는 경우가 많습니다.","입생로랑 - 몽 파리, 로이비 - 만다린 앤 샌달우드","Spicy","middle"  ],
        [40,"너트맥","약간 매콤한 견과류 향","너트맥은 스파이시 계열입니다. 사향 냄새가 나는 호두라는 뜻으로 매콤한 향을 가지고 있습니다. 달콤하고 매혹적인 스파이시 향으로, 화장품과 \n향수에 광범위하게 사용되는 향입니다. 시트러스 계열과 같이 사용하여 청량감과 상큼함을 극대화 시킬 때 이용되기도 합니다. 플로럴 계열, 머스크 계열과의 조합도 잘 맞습니다.","구찌 - 아쿠아 디 피오리, 디올 - 자도르 인피니심","Spicy","middle"  ],
        [41,"페퍼","톡 쏘는 매운 향","페퍼는 스파이시 계열입니다. 톡 쏘는 후추의 향으로 따뜻한 느낌을 가지고 있습니다. 특유의 특성 때문에 보통 따뜻한 느낌을 표현할 때 많이 사용되고 \n있습니다. 우드 계열과 머스크 계열, 플로럴 계열과 잘 어울립니다.","루이비통 - On The Beach, 조말론 - 우드 세이지 앤 씨 솔트","Spicy","middle"  ],
        [42,"히아신스","달콤하고 선명한 향","히아신스는 플로럴 계열입니다. 달콤하고 선명한 꽃 향기가 성국하고 우아한 느낌을 줍니다. 플로럴 계열, 머스크 계열과 조화를 이룹니다.","프로소디 - 런던 히아신스 존퀼, 펜할리곤스 - 블루벨","Floral","middle"  ],
        [43,"월계수","달콤하고 매콤하면서 부드러운 계피향","월계수는 스파이시 계열입니다. 달콤하면서 부드러운 계피향을 가지고 있습니다. 베르가못, 제라늄, 주니퍼베리와 많이 사용되는 \n향료입니다.","조말론 - 블랙베리 앤 베어, 르 라보 떼 누아 29","Spicy","middle"  ],
        [44,"자몽","쌉싸름하고 향긋한 감귤류 향","자몽은 시트러스 계열입니다. 시큼한 천연 향으로 상쾌한 느낌입니다. 자몽과에 속하는 아열대 감귤나무의 열매에서 추출한 향입니다.","샤넬 - 샤넬 샹스 오 땅드르, 에르메스 - 오드루바브 에칼라트 오드코롱","Citrus","middle"  ],
        [45,"바질","매콤하고 상큼한 허브 향","바질은 허버 계열입니다. 부분적으롣 달콤하고 매콤한 향과 함께 따뜻한 나무의 느낌을 가지고 있는 향입니다.","돌체앤가바나 - The One for Men, 아쿠아 디 파르파 - Bli Mediterraneo Foglie di Basilio","Herbal","middle"  ],
        [46,"은방울 꽃","달콤한 자스민같은 향","은방울 꽃은 플로럴 계열입니다. 물기가 많은 봄기운의 꽃향기 같은 향입니다. 아삭아삭한 녹색의 느낌과 함께 \n자스민의 꽃 향기도 느껴집니다.","디올 - Diorissimo, 조말론 - 와일드 블루벨","Floral","middle"  ],
        [47,"튜베로즈","강렬하고 달콤한 향기","튜베로즈는 플로럴 계열입니다. 달콤하고 강렬한 플로럴 향은 화려한 꽃다발을 받는 것과 같은 향입니다. 멕시코가 원산지인 \n아스파라 식물의 흰 꽃에서 나는 향입니다.","구찌 - Bloom for Women","Floral","middle"  ],
        [48,"샌달우드","오래된 고목이 떠오르는 달콤하고 따뜻한 나무 향","샌달우드는 우디 계열입니다. 전체적으로 따뜻하면서 \n건조한 느낌의 나무 향으로 약간의 시큼함이 느껴지기도 합니다. 워터리한 나무향은 봄, 여름에 공기 중 수분을 머금은 나무같은 느낌이 \n납니다. 베이스로서 다른 우디 계열의 흙 향과 잘 어울립니다.","르라보 - 상탈33, 톰포드 - 상탈 블러쉬","Woody","base"  ],
        [49,"시더우드","수분을 머금은 나무 향, 연필향","시더우드는 우디 계열입니다. 연필을 만드는 나무를 이용한 향으로, \n연필 깎는 냄새가 시더우드 향이라 할 수 있습니다. 시더우드는 시간이 갈 수록 향이 점점 더 따뜻하고 나무의 스윗함이 느껴집니다. \n전체적으로 드라이한 느낌이지만 다른 나무들에 비해 촉촉한 편이라 보다 젊은 느낌을 줄 수 있습니다. 여성 향수보다는 남성 향수에 \n주로 쓰이고 우디 계열과 조화가 좋습니다.","샤넬 - 샹스 오 땅드르, 에르메스 - 떼르 데르메스","Woody","base"  ],
        [50,"베티버","건강한 흙내음","베티버는 우디 계열입니다. 뿌리에서 향을 가지고 오기 때문에 뿌리의 느낌이 나는 자연의 향을 느낄 수 있습니다. 수분감이 \n많이 느껴지며 뿌리의 냄새가 매콤함을 주기도 하여 텁텁하다는 느낌을 줄 수도 있습니다. 보통 마지막에 스모키와 쓴내를 첨가하기 위해 많이 사용하는 편입니다.","크리드 - 오리지날 베티버, 프레데릭말 - 베티버 엑스 트라오디네르","Woody","base"  ],
        [51,"파출리","깊고 어두운 흙 냄새와 오리엔탈 향","파출리는 우디 계열입니다. 잎은 달콤하고 알싸하면서도 스모키한 나무 향이 강하게 납니다. 민트과 \n식물로 파출리 향에서 히피 세대가 느껴진다고 해 '1960년대의 향'이라고도 불립니다. Floral하고 우디한 Musk 계열의 향과 잘 어울립니다.","톰포드 - 화이트 파출리, 르라보 - 파출리24","Woody","base"  ],
        [52,"벤조인","발삼과 바닐라가 조화된 듯한 달콤한 향","벤조인은 우디 계열입니다. 자연의 향을 바탕으로 달콤함이 느껴지는 향입니다. 나무껍질 \n진액에서 추출한 향으로 신경계를 편안하게 해주는 효과가 있습니다.","조말론 - 머르 앤 통카 코롱 인텐스, 펜할리곤스 - 사토리얼","Woody","base"  ],
        [53,"오크모스","약간의 탄내가 섞인 흙 내음, 이끼 향","오크모스는 우디 계열입니다. 흙과 이끼의 냄새가 나고 약한 가죽 냄새가 곁들어진 것 \n같은 느낌을 가지고 있습니다. 향이 강하고 오래 가며 주로 남성 향수에 많이 사용됩니다. Floral, Fruity, 우디 계열의 향수를 만드는 데 베이스로 사용합니다.","코티 - 시프레, 자끄 겔랑 - 마츠코","Woody","base"  ],
        [54,"히노끼","부드럽고 향긋한 풀의 향","히노끼는 우디 계열입니다. 숲 속에 있는 것 같은 쾌적하고 시원한 느낌을 주는 향입니다. 편백나무를 \n뜻하며, 특유의 부드럽고 향긋한 숲의 향을 느낄 수 있습니다.","이솝 - 휠","Woody","base"  ],
        [55,"미르(몰약)","흙내음과 고무냄새같은 옅은 사과향","미르(몰약)은 스파이시, 우디 계열입니다. 몰약나무 수액에서 채취한 천연 향료로서 \n유서 깊은 성당에 들어가면 나는 향입니다. 속칭 '처치 스멜'이라고 불리며, 고대시절부터 몸과 마음을 차분하게 해주는 향료로 사용되었습니다. \n오리엔탈 계열의 밝고 명량한 이미지의 향들과 잘 어울립니다. 스파이시, 우디 계열과의 조화가 좋습니다.","조말론 - 머르 앤 통카 코롱 인텐스, \n펜할리곤스 - 사토리얼","Woody","base"  ],
        [56,"통카빈","바닐라 향과 코코넛, 카라멜 향이 어우러진 독특한 향","통카빈은 Balsamic 계열입니다. 구르망과 카라멜, Balsamic 향으로 따뜻한 느낌을 \n주는 향입니다. 고소하면서 달콤한 묵직함을 매력으로 가지고 있습니다.","겐조 - 플라워바이겐조, 조말론 - 머르앤통카","Balsamic","base"  ],
        [57,"세이지","아로마틱한 허브 향","세이지는 Herbal 계열입니다. 쌉싸름하고 거친 느낌을 주는 향료로 축축한 흙 위의 허브를 떠올리게 합니다. 향료형 \n허브로 향을 맡으면 허브의 화함이 강해 개운함이 느껴지기도 합니다. 프레쉬하고 네추럴한 느낌으로 여성 향수보다 남성 향수에 주로 사용됩니다.","입생로랑 - Y 오드퍼퓸, 조말론 - 우드 세이지 앤 씨 솔트","Herbal","base"  ],
        [58,"앰버","달콤하고 파우더리한 향","앰버는 앰버 계열입니다. 베이스 노트 자체의 향을 파우더리하게 만들어주며 향수 전체의 지속력을 높여줍니다. \n대부분의 향수에 들어가지만 결합되는 향에 따라 관능적인 느낌을 주기도 하고, 보다 부드럽고 달콤한 느낌을 주기도 합니다. 바닐라 오일과 오리엔탈, Musk \n계열과 조화가 좋습니다.","랑방 - 에끌라 드 아르페쥬, 잔느","Amber","base"  ],
        [59,"Musk","포근하면서도 살짝 무거운 은은한 살결 냄새","Musk는 Musk 계열입니다. Musk는 묵직한 느낌을 지니고 있으며 따뜻하고 베이비 \n파우더 향이 납니다. 포근하면서 몽환적인 느낌을 가지고 있어 겨울에 특히 잘 어울리는 향입니다. Fruity, 시트러스 계열과의 조화가 좋습니다.","키엘 - 오리지날 Musk, 톰포드 - 화이트 스웨이드","Musk","base"  ],
        [60,"블랙베리","감미로우면서 부드럽고 새콤한 향","블랙베리는 Fruity, Floral 계열입니다. 과일 향과 꽃 향기가 조화를 이루는 부드러운 향입니다. \n특유의 시큼함과 달콤함이 매력적인 향입니다.","디올 - 쟈도르, 조말론 - 블랙베리 앤 베이","Fruity","base"  ],
        [61,"바닐라","약간 무거우면서 달콤하고 편안해지는 향","바닐라는 구르망 계열입니다. 무거우면서 부드러운 달콤한 향입니다. 특유의 달달한 향은 \n사람에 따라 섹시하기도 하고 여리여리한 이미지로 느끼게 하기도 합니다. 가장 많이 쓰이는 향수 재료 중 하나입니다.","더바디삽 - 바닐라, \n세르주 루텐 - 운 부아 바닐라","Gourmand","base"  ],
        [62,"일랑일랑","매혹적이고 시원하면서 관능적인 향","일랑일랑은 Floral 계열입니다. 단아하고 성숙한 여인이 떠오르는 꽃 향기로 은은함을 가지고 \n있는 향입니다. '꽃 중의 꽃'이라는 의미를 가진 만큼 한 번 알게된다면 잊지 못할 만큼 인상적인 향입니다. 자스민, 바닐라, 오렌지 향과 많이 사용됩니다.","샤넬 - No.5, 딥디크 - 오 모헬리","Floral","base"  ],
        [63,"자스민","싱그럽고 풍부한 꽃 향","자스민은 Floral 계열입니다. 부드러우면서 따뜻한 향 뒤 약간의 동물적 향취를 가지고 있습니다. Floral \n노트에서 장미와 같이 가장 중요한 역할을 하는 향료로, 조합에 따라 다양한 향으로 표현될 수 있습니다. 사람에 따라서는 향긋한 꽃 향기 대신 꼬릿꼬릿한 \n냄새를 먼저 맡는 사람도 있습니다.","장파투 - Joy, 캘빈클라인 - Beauty","Floral","base"  ],
        [64,"핑크페퍼","산뜻하면서 매콤한 꽃 향","핑크페퍼는 스파이시 계열입니다. 향기로운 장미빛에 맑고 톡 쏘는 허브향을 가지고 있습니다. \n페루 관목에서 나는 말린 열매의 향에서 추출했습니다. 페퍼보다 Floral한 느낌이 있습니다.","조르지오 아르마니 - Acqua Di Gioia for Women, \n구찌 - Flora for Women","Spicy","base"  ]
    ];


    const FragranceType = [
        [
            'Floral',
            '꽃 향기를 표현한 것으로 각 꽃의 이미지를 살려서 만든 향기입니다.\n모든 사람들에게 친근하고 대중적인 향입니다.\n플로럴 계열은 어떤 향을 첨가하느냐에 따라 다양한 종류로 나눌 수 있습니다.',
            '#9C5379',
            [

            ]
        ],
        [
            'Citrus',
            '감귤류의 향조를 표현한 것으로 헤스페리딘 성분이 포함되어 있습니다.\n산뜻하고 상쾌하여 탑 노트에 주로 사용됩니다.\n상큼하고 친근감이 느껴지는 향으로 누구나 받아들이기 쉬운 향조입니다.',
            '#959516',
            [

            ]
        ],
        [
            'Fruity',
            '과일 향을 표현하여 상큼한 향입니다.\n귀엽고 발랄한 이미지를 줍니다.\n4계절 모두 사용하기 용이하며 밝은 기운을 주고 싶을 때 사용합니다.',
            '#AD6B1D',
            [
                
            ]
        ],
        [
            'Spicy',
            '향신료 향기를 표현한 향입니다.\n매운 듯한 느낌의 자극적인 향이지만 향수에 섞이게 되면 강한 인상을 줄 수 있는 향입니다.\n관능적이고 유혹적인 느낌을 주고 싶을 때 사용합니다.',
            '#971D1D',
            [
                
            ]
        ],
        [
            'Woody',
            '신선한 나무 향기를 표현한 향입니다.\n중후한 잔향이 많이 남아 지속력이 좋은 편입니다.\n다른 계열을 돋보이게 해주는 역할로 많이 사용됩니다.',
            '#884413',
            [
                
            ]
        ],
        [
            'Herbal',
            '허브류에서 느낄 수 있는 향입니다. \n아로마 테라피에 사용되는 향입니다.\n안정감과 청량감을 주시 위해서 사용됩니다.',
            '#54821B',
            [
                
            ]
        ],
        [
            'Earthy',
            '흙, 진흙, 먼지, 마루바닥 특유의 냄새를 나타내는 향입니다.\n자연의 향과 가깝다고 말할 수 있습니다.',
            '#1B8275',
            [
                
            ]
        ],
        [
            'Musk',
            '달달하고 묵직한 이미지의 파우더 냄새입니다.\n사향노루의 사향낭에서 사향선을 건조시켜 만든 향으로, 따뜻한 살냄새를 표현합니다.\n이성을 유혹하는 향이라는 이미지를 가지고 있습니다.',
            '#821B77',
            [
                
            ]
        ],
        [
            'Gourmand',
            '달콤하고 맛있는 냄새의 향기입니다.\n바닐라 향에 기초하며 디저트류를 떠올리게 되는 향입니다.\n코 뿐만 아니라 혀의 미각 돌기를 자극하여 풍부한 향을 선사합니다.',
            '#78544C',
            [
                
            ]
        ],
        [
            'Balsamic',
            '달콤하고 신비스러운 향입니다.\n침엽수에서 분비되는 레진 성분을 원료로 만든 향료입니다.',
            '#301B82',
            [
                
            ]
        ],
        [
            'Amber',
            '달큰하고 파우더리하며 따뜻한 향기입니다.\n호박에서 날법한 향을 이미지로 하여 만들어 낸 향입니다.',
            '#959516',
            [
                
            ]
        ]
    ];


    for (let i = 0, len = FragrancesList.length; i < len; i++) {
        for (let j = 0, llen = FragranceType.length; j < llen; j++) {
            if (FragrancesList[i][5].indexOf(FragranceType[j][0]) != -1) {
                FragranceType[j][3].push(FragrancesList[i]);
            }
        }
    }

    const [ allData, setAllData ] = useState(FragrancesList);
    const [ filteredData, setFilteredData ] = useState(allData);


    return (
        <Layout title='Blooming Fragrance'>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.title}>Blooming fragrance</div>

                    <div className={styles.saving} id='finish-view'>
                        <span style={{fontSize: '40px'}}>나만의 향수가 저장되었습니다!</span>
                        <div style={{marginTop: '100px'}}><FlatButton color='#4C956C' highlight='#2C6E49' width='300px' height='100%' style={{fontSize: '24px', padding: '12px 16px'}} onClick={(event) => {
                            document.getElementById('making-content-div').style.display = 'none';
                        }}>{'나만의 향수 보러가기 ->'}</FlatButton></div>
                    </div>

                    <div className={styles.contents} id='making-content-div'>

                        <div className={styles.FinishPopup} id='finish-pw'>
                            <span className="material-icons" style={CloseButtonStyle} onClick={(event) => {
                                const popup = document.getElementById('finish-pw');
                                popup.style.display = 'none';
                            }}>close</span>
                            <img src={FinishBottleImg} alt='finish-bottle' className={styles.FinishBottle}/>
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'center', fontSize: '20px'}}>
                                <span style={{width: '100%', textAlign: 'left'}}>{'탑 노트(' + progressTop + 'ml):'}</span>
                                <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'left', alignItems: 'center', width: '100%'}}>
                                    {
                                        topFragrances.split('/').map( (e, index) => {
                                            let tmp = e.split('.');
                                            if (e[0] == undefined) return;
                                            return (
                                                <span key={index} style={{width: 'fit-content', textAlign: 'left'}}>{tmp[0] + ' (' + tmp[1] + 'ml)' + (index != topFragrances.split('/').length - 2? ',\u00a0' : '')}</span>
                                            )
                                        })
                                    }
                                </div>
                                <span style={{width: '100%', textAlign: 'left', marginTop: '40px'}}>{'미들 노트(' + progressMiddle + 'ml):'}</span>
                                <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'left', alignItems: 'center', width: '100%'}}>
                                    {
                                        middleFragrances.split('/').map( (e, index) => {
                                            let tmp = e.split('.');
                                            if (e[0] == undefined) return;
                                            return (
                                                <span key={index} style={{width: 'fit-content', textAlign: 'left'}}>{tmp[0] + ' (' + tmp[1] + 'ml)' + (index != middleFragrances.split('/').length - 2? ',\u00a0' : '')}</span>
                                            )
                                        })
                                    }
                                </div>
                                <span style={{width: '100%', textAlign: 'left', marginTop: '40px'}}>{'베이스 노트(' + progressBase + 'ml):'}</span>
                                <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'left', alignItems: 'center', width: '100%'}}>
                                    {
                                        baseFragrances.split('/').map( (e, index) => {
                                            let tmp = e.split('.');
                                            if (e[0] == undefined) return;
                                            return (
                                                <span key={index} style={{width: 'fit-content', textAlign: 'left'}}>{tmp[0] + ' (' + tmp[1] + 'ml)' + (index != baseFragrances.split('/').length - 2? ',\u00a0' : '')}</span>
                                            )
                                        })
                                    }
                                </div>
                                <input id='finish-comment-input' placeholder='요청 사항을 입력해주세요. (원하는 느낌, 부탁할 것, 메인 향 등)' className={styles.finishInput}/>
                                <div className={styles.realFinish}><FlatButton color='#4C956C' highlight='#2C6E49' width='100%' height='100%' style={{fontSize: '24px'}} onClick={(event) => {
                                    document.getElementById('making-content-div').style.display = 'none';
                                    document.getElementById('finish-view').style.display = 'flex';
                                    /*
                                    * 제작한 향수가 북마크 향수 목록에 추가되는 부분입니다
                                    * 이름은 향수001 이런식으로 저장되고
                                    * 노트 정보는 topFragrances, middleFragrances, baseFragrances 에 저장되어 있습니다
                                    * 예를들어 탑노트에 샌달우드 5ml, 오크모스 10ml 가 들어있다면
                                    * topFragrances에는 '샌달우드.5/오크모스.10' 이런식으로 문자열 형태로 저장됩니다.
                                    * 데이터베이스에 저장할 때는 이거를 json array로 부탁드립니다
                                    * mypage에 저장되는 양식이 있는데 예를 들면
                                    * [ '향수명', [['향료명', ml]] ] 이런식으로 저장되야합니다
                                    * 향료는 탑, 미들, 베이스 순으로 저장되야합니다
                                    */
                                }}>finish</FlatButton></div>
                            </div>
                        </div>
                        
                        <div className={styles.bottleDiv}>
                            <img src={BottleImg} alt='bottle image' className={styles.bottle} onClick={ (event) => {
                                const pg_wd = document.getElementById('progress-window');
                                pg_wd.style.display = 'block';

                                let tt = '[ 탑 노트 ]\n';
                                let sssp = topFragrances.split('/');
                                sssp.forEach( (e, index) => {
                                    let tmp = e.split('.');
                                    if (e[0] != undefined) {
                                        tt += '\u00a0- ' + tmp[0] + ': ' + tmp[1] + 'ml\n';
                                    }
                                })

                                tt += '\n[ 미들 노트 ]\n';

                                sssp = middleFragrances.split('/');
                                sssp.forEach( (e, index) => {
                                    let tmp = e.split('.');
                                    if (e[0] != undefined) {
                                        tt += '\u00a0- ' + tmp[0] + ': ' + tmp[1] + 'ml\n';
                                    }
                                })

                                tt += '\n[ 베이스 노트 ]\n';

                                sssp = baseFragrances.split('/');
                                sssp.forEach( (e, index) => {
                                    let tmp = e.split('.');
                                    if (e[0] != undefined) {
                                        tt += '\u00a0- ' + tmp[0] + ': ' + tmp[1] + 'ml' + (index != sssp.length? '\n' : '');
                                    }
                                })
                                setView(tt);
                            }}/>
                            <div id='current' className={styles.current}>{BottleProgress.MAX + 'ml/' + (progressTop + progressMiddle + progressBase) + 'ml'}</div>
                            <div className={styles.BottleDescription}>* 상기 용량은 향수 종류에 따라 달라질 수 있습니다.</div>
                            <div className={styles.contentspan}>
                                <span className={styles.inBottle} id='top-span' style={{backgroundColor: COLOR.TOP}}></span>
                                <span className={styles.inBottle} id='middle-span' style={{backgroundColor: COLOR.MIDDLE}}></span>
                                <span className={styles.inBottle} id='base-span' style={{backgroundColor: COLOR.BASE}}></span>
                            </div>

                            <div className={styles.progress_window} id='progress-window' onClick={ (event) => {
                                document.getElementById('progress-window').style.display = 'none';
                            }}>
                                <span>{view}</span>
                            </div>
                        </div>

                        <div className={styles.comments} id='pw'>
                            <span className="material-icons" style={CloseButtonStyle} onClick={(event) => {
                                const popup = document.getElementById('pw');
                                popup.style.display = 'none';
                            }}>close</span>
                            <div className={styles.PopupWindow}>
                                <div>
                                    <div className={styles.PopupWindowTitle}>Fragrance Component</div>
                                    <div className={styles.PopupWindowDescription}>향수는 top note, middle note, base note로 구성되어 있습니다.</div>
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
                                        보통 주위사람들이 느끼는 향과 가장 비슷합니다.<br/>
                                        향수의 50~80%를 블랜딩 비율로 갖습니다.</div>
                                </div>

                                <div className={styles.NoteInfo}>
                                    <div className={styles.NoteName} style={{backgroundColor: '#A6C48A'}}>Base note</div>
                                    <div className={styles.descriptions}>베이스노트는 모든 향이 다 날아간 후에 맡는 향입니다.<br/>
                                        향수를 뿌린 후 2~3시간 전후까지 지속됩니다.</div>
                                </div>
                            </div>                        
                        </div>

                        <nav className={styles.buttons}>
                            <div className={styles.adding}><FlatButton color='#FFC9B9' highlight='#DD9787' width='100%' height='100%' style={{fontSize: '20px'}} onClick={(event) => AddToBottleListener(event, 5)}>+ 5ml</FlatButton></div>
                            <div className={styles.adding}><FlatButton color='#FFC9B9' highlight='#DD9787' width='100%' height='100%' style={{fontSize: '20px'}} onClick={(event) => AddToBottleListener(event, 1)}>+ 1ml</FlatButton></div>
                            <div className={styles.adding}><FlatButton color='#DD9787' highlight='#FFC9B9' width='100%' height='100%' style={{fontSize: '20px'}} onClick={(event) => AddToBottleListener(event, -5)}>- 5ml</FlatButton></div>
                            <div className={styles.adding}><FlatButton color='#DD9787' highlight='#FFC9B9' width='100%' height='100%' style={{fontSize: '20px'}} onClick={(event) => AddToBottleListener(event, -1)}>- 1ml</FlatButton></div>
                            <div className={styles.RefreshButton}><FlatButton color='#74D3AE' highlight='#4C956C' width='100%' height='100%' style={{fontSize: '20px'}} onClick={(event) => AddToBottleListener(event, 0)}>refresh</FlatButton></div>
                            <div className={styles.FinishButton}><FlatButton color='#4C956C' highlight='#2C6E49' width='100%' height='100%' style={{fontSize: '24px'}} onClick={(event) => {
                                const finish_pw = document.getElementById('finish-pw');
                                finish_pw.style.display = 'flex';
                                finish_pw.style.width = finish_pw.parentElement.offsetWidth - 240 + 'px';
                                finish_pw.style.height = finish_pw.parentElement.offsetHeight - 240 + 'px';
                            }}>finish</FlatButton></div>
                        </nav>

                        <div className={styles.making} id='making'>
                            <nav className={styles.makingNav}>
                                <div className={styles.NavItems} id='top' onClick={(event) => onNavClickListener(event)} style={{borderBottom: '4px solid #2C6E49'}}>Top note</div>
                                <div className={styles.NavItems} id='middle' onClick={(event) => onNavClickListener(event)}>Middle note</div>
                                <div className={styles.NavItems} id='base' onClick={(event) => onNavClickListener(event)}>Base note</div>
                            </nav>
                            
                            <div style={{padding: '4px 4px', marginTop: '6px', backgroundColor: '#FFFFFF', borderRadius: '20px'}}>
                                <div className={styles.NoteDescription}>
                                    <div className={styles.currentTitle} style={{fontSize: '26px', paddingBottom: '10px', fontWeight: '600'}}><span id='current-note-title'>탑노트</span><span>란?</span><span id='note-milli' style={{fontSize: '12px', paddingLeft: '5px'}}>(5~20ml)</span></div>
                                    <div id='current-note-description' className={styles.currentDescription} style={{fontSize: '18px'}}>뿌린 뒤 10분 전후에 나타나는 향으로 향의 첫인상을 결정합니다.<br/>향료를 선택하여 나만의 향수를 만들어 보세요!</div>
                                </div>
                            </div>

                            <div className={styles.filterBox}>
                                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: '18px', padding: '8px 8px', margin: '10px 10px 10px 0'}}>
                                    <span className="material-icons">search</span>
                                    <input type='search' id='input-search' className={styles.searchArea} placeholder='향료 검색' onChange={ (event) => {
                                        let value = event.target.value.trim();

                                        if (value == '') {
                                            setFilteredData(allData);
                                        }
                                        else {
                                            let result = [];
                                            result = allData.filter( (data) => {
                                                return (data[1].trim().search(value) != -1);
                                            });
                                            setFilteredData(result);
                                        }
                                    }}/>
                                </div>
                                <button className={styles.filterButton}><span className="material-icons">expand_more</span>계열 &nbsp;</button>
                            </div>

                            <div className={styles.FragranceComponents} id='fragrance-grid'>
                                {
                                    filteredData.map( e => {
                                        return (
                                            <div key={e[1]} id={'box-' + e[1]} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', transition: 'margin-bottom 0.3s ease-in-out'}}>
                                                <FragranceBlock title={e[1]} description={e[2]} id={'fm-' + e[1]} onClick={ (event, thiz_id, clicked) => {

                                                    let offset_y = 0;

                                                    thiz_id = thiz_id.split('-')[1];
                                                    
                                                    let desc = document.getElementById("detail-description-" + thiz_id);
                                                    let boxx = document.getElementById('box-' + thiz_id);
                                                    
                                                    if (clickedFragrance != '') {
                                                        if (clickedOffset < boxx.offsetTop) offset_y -= 200;
                                                        else offset_y = 0;
                                                        
                                                        if (clickedFragrance != thiz_id) document.getElementById('fm-' + clickedFragrance).click();
                                                    }

                                                    offset_y += boxx.offsetTop + 200;

                                                    if (clicked) {
                                                        desc.style.transform = 'scaleY(0)';
                                                        boxx.style.marginBottom = '0';
                                                        boxx.style.backgroundColor = '#FEFEE3';
                                                        setClickedFragrance('');
                                                        setClickedOffset(0);
                                                    }
                                                    else {
                                                        desc.style.top = offset_y + 'px';
                                                        desc.style.width = document.getElementById('fragrance-grid').offsetWidth - 42 + 'px';
                                                        desc.style.transform = 'scaleY(1)';
                                                        boxx.style.marginBottom = '210px';
                                                        boxx.style.backgroundColor = '#FFFFFF';
                                                        setClickedFragrance(thiz_id);
                                                        setClickedOffset(boxx.offsetTop);
                                                    }
                                                }}/>
                                                <div className={styles.detail_description} id={"detail-description-" + e[1]}>{e[3] + '\n\n대표 향수\n' + e[4]}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export default FragranceComponentPage