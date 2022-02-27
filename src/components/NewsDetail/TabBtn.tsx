import React from "react";
interface TabProps {
  category: boolean;
  setCategory: React.Dispatch<React.SetStateAction<boolean>>;
  comment: boolean;
  setComment: React.Dispatch<React.SetStateAction<boolean>>;
  archive: boolean;
  setArchive: React.Dispatch<React.SetStateAction<boolean>>;
}

const TabBtn: React.FC<TabProps> = ({
  category,
  setCategory,
  comment,
  setComment,
  archive,
  setArchive,
}) => {
  const handelCategory = () => {
    setCategory(true);
    setComment(false);
    setArchive(false);
  };
  const handelComment = () => {
    setCategory(false);
    setComment(true);
    setArchive(false);
  };
  const handleArchive = () => {
    setCategory(false);
    setComment(false);
    setArchive(true);
  };
  return (
    <React.Fragment>
      <div
        onClick={handelCategory}
        className="flex-row w-20 h-10 pt-2 text-center bg-gray-50 text-sm border border-gray-200 cursor-pointer"
      >
        {" "}
        اخبار
      </div>
      <div
        onClick={handelComment}
        className="flex-row w-20 h-10 pt-2 text-center bg-gray-50 text-sm border border-gray-200 cursor-pointer"
      >
        نظرات
      </div>
      <div
        onClick={handleArchive}
        className="flex-row w-28 h-10 pt-2 text-center bg-gray-50 text-sm border border-gray-200 cursor-pointer"
      >
        {" "}
        آرشیو نظرات
      </div>
    </React.Fragment>
  );
};
export default TabBtn;
