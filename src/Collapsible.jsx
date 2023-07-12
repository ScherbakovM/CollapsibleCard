import './App.css'
import { motion, AnimatePresence, animate, spring } from "framer-motion";
import { useState } from 'react';
import React from 'react';

const Collapsible = (props) => {

    const {
        title = 'Тут праздник',
        children,
    } = props;

    const [isVisible, setVisible] = useState(false);
    const handleVisibility = () => {
        setVisible(!isVisible)
    }

    return (
        <div style={{ border: '1px solid black', backgroundColor: 'pink'}}>
            <div
                onClick={handleVisibility}
                style={{
                    width: 300,
                    height: 50,
                    padding: '0.8rem',
                    cursor: 'pointer',
                }}>
                {title}
            </div>

            <AnimatePresence initial={false}>
                {
                    isVisible && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 300, }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.2, type: 'tween' }}
                        >
                            <div
                                style={{
                                    width: 400,
                                    padding: '0.8rem',
                                }}
                            >

                                {children}
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}

export default Collapsible;