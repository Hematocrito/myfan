import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

export default function Pagination({ currentPage, setPage, pages }: any) {
  // Wrap all the pagination dots with AnimateSharedPresence so we can detect
  // when dots with a layoutId are removed/added
  return (
    <AnimateSharedLayout>
      <div className="dots">
        {pages.map((page: any) => (
          <Dot
            key={page}
            onClick={() => setPage(page)}
            isSelected={page === currentPage}
          />
        ))}
      </div>
    </AnimateSharedLayout>
  );
}

function Dot({ isSelected, onClick }: any) {
  return (
    <div className="dot-container" onClick={onClick}>
      <div className="dot">
        {isSelected && (
          // By setting layoutId, when this component is removed and a new one
          // is added elsewhere, the new component will animate out from the old one.
          <motion.div className="dot-highlight" layoutId="highlight" />
        )}
      </div>
    </div>
  );
}
