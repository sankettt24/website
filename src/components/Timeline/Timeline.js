import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import './Timeline.css';

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="timeline-wrapper" ref={containerRef}>
      <div className="timeline-container">
        <div ref={ref} className="timeline-relative">
          {data.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
          
          {/* Animated timeline line with gradient */}
          <div 
            style={{ height: height + "px" }}
            className="timeline-line-base"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="timeline-line-animated"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="timeline-item-wrapper"
    >
      <div className="timeline-item-header">
        {/* Timeline dot with enhanced styling */}
        <div className="timeline-dot-outer">
          <div className="timeline-dot-inner" />
        </div>
        
        {/* Title with gradient text */}
        <h3 className="timeline-title-desktop">
          {item.title}
        </h3>
      </div>

      <div className="timeline-content-wrapper">
        {/* Mobile title */}
        <h3 className="timeline-title-mobile">
          {item.title}
        </h3>
        
        {/* Content with enhanced styling */}
        <div className="timeline-content-card">
          {item.content}
        </div>
      </div>
    </motion.div>
  );
};
