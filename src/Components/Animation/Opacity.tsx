import {motion, useAnimation, useInView} from "framer-motion";
import {useEffect, useRef} from "react";
import {ReactNode} from "react";
import {CSSProperties} from "react";

type TPropType = {
    className: string;
    children: ReactNode;
    style?: CSSProperties;
}
const Opacity = ({className, children, style}: TPropType) => {

    const ref = useRef(null)
    const variants = {
        hidden: {opacity: 0},
        visible: {opacity: 1},
    };
    const inView = useInView(ref, {once: true});
    const control = useAnimation();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [inView, control]);

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={variants}
            initial="hidden"
            animate={control}
            transition={{duration: .9, ease: "linear"}}
            style={style}
        >
            {children}
        </motion.div>
    )
}
export default Opacity;