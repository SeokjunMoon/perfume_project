import React, { useState } from "react"
import styles from './review.module.css'
import Layout from '../../components/main_layout/Layout'


const ReviewPage = () => {

    const plus_style = {
        border: '1px dashed #054A29',
        boxSizing: 'border-box',
        borderRadius: '20px',
        width: 'calc(100vw - 40px)',
        maxWidth: '700px',
        height: '50px',
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        color: '#054A29'
    };

    /*
    * 리뷰 목록을 불러오는 부분입니다
    * 이번에는 json column array로 불러오며
    * 저장 형태는 다음과 같습니다
    * comments 배열은 [[ id, 댓글, 좋아요, 싫어요 ], ...] 순서입니다
    */
    const temp = [
        {
            "index": 1,
            "id": "asdf",
            "title": "원목 가구에서 나는 신 느낌의 향나무",
            "top": "샌달우드",
            "middle": "매그놀리아, 시나몬",
            "base": "핑크페퍼, 시더우드",
            "description": "처음 샌달우드의 따뜻한 나무 향이 나면서 시나몬의 톡쏘는 향을 플로럴 계열인 매그놀리아가 살포시 눌러 조화로운 우드 플로럴 향이 나는 향수입니다. 숲 속에 있는 자연 나무 향보다는 하얀 원목 가구에서 나는 나무 향과 비슷합니다.\n향수 중에는 오르메의 28 향수가 가장 비슷합니다.",
            "comments": [
                ["abc123", "덕분에 좋은 향을 알게 되었습니다! 직접 시향해보니 저는 플로럴 보다는 우디한 향이 더 많이 느껴져서 거친 송판에서 나는 향 같더라고요", 2, 8],
                ["base232", "덕분에 좋은 향을 알게 되었습니다! 직접 시향해보니 저는 플로럴 보다는 우디한 향이 더 많이 느껴져서 거친 송판에서 나는 향 같더라고요", 2, 3]
            ]
        }
    ];

    const [ reviews, setReviews ] = useState(temp);


    return (
        <Layout>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className={styles.container}>
                    <span className={styles.title}>perfume review</span>

                    <span class="material-icons" style={plus_style}>add_circle_outline</span>

                    <div>
                        {
                            reviews.map( (e, index) => {
                                return (
                                    <div key={index}>
                                        <span>{e.id}</span>
                                        <span>{e.title}</span>
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ReviewPage