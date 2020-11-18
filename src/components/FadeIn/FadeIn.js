import {motion} from 'framer-motion';
import React from 'react';

export default function FadeIn({children, delay}) {
  return (
    <motion.div
      animate={{opacity: 1}}
      inherit={false}
      initial={{opacity: 0}}
      transition={{delay}}
    >
      {children}
    </motion.div>
  );
}
