import React from 'react';
import {SwiperSlide, Swiper} from "swiper/react";

import PlanCard from "../plan-card/plan-card";

import 'swiper/css'

type PlansProps = {
    plans: any[]
}

const Plans = ({plans}:PlansProps) => {
    return (
        <div className={'plans'}>
            <Swiper
                slidesPerView={2.5}
                spaceBetween={50}
            >
                {
                    plans.map(plan => (
                        <SwiperSlide key={plan.id}>
                            <PlanCard
                                title={plan.title}
                                foodImage={plan.img}
                                day={plan.days}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Plans;