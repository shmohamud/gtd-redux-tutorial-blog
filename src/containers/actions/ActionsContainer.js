import React from "react";
import VisibleActionList from "../../components/actions/VisibleActionList";
import FilterBar from "../../components/actions/FilterBar";

const ActionsContainer = () => {
  return (
    <>
      <VisibleActionList />
      <FilterBar />
    </>
  );
};

export default ActionsContainer;
