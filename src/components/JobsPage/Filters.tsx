import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "../../styles/JobsPageStyles/Filters.module.scss";

type FilterProps = {
  jobTitles: string[];
  salaryRanges: { label: string; value: string }[];
  dates: string[];
  onFilter: (filters: { title?: string; salary?: string; date?: string }) => void;
};

const Filters = ({
  jobTitles,
  salaryRanges,
  dates,
  onFilter,
}: FilterProps) => {
  const { t } = useTranslation("jobs");
  const [selectedTitle, setSelectedTitle] = useState<string>("");
  const [selectedSalary, setSelectedSalary] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const title = e.target.value;
    setSelectedTitle(title);
    onFilter({ title });
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const salary = e.target.value;
    setSelectedSalary(salary);
    onFilter({ salary });
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const date = e.target.value;
    setSelectedDate(date);
    onFilter({ date });
  };

  const handleReset = (type: string) => {
    if (type === "title") {
      setSelectedTitle("");
      onFilter({ title: "" });
    } else if (type === "salary") {
      setSelectedSalary("");
      onFilter({ salary: "" });
    } else if (type === "date") {
      setSelectedDate("");
      onFilter({ date: "" });
    }
  };

  return (
    <div className={styles.filters}>
      <div className={styles.filterItem}>
        <select
          id="jobTitle"
          value={selectedTitle}
          onChange={handleTitleChange}
          className={styles.selectField}
        >
          <option value="" disabled>{t("filters.jobTitle")}</option>
          {jobTitles.map((title, index) => (
            <option key={index} value={title}>
              {title}
            </option>
          ))}
        </select>
        {selectedTitle && (
          <span
            className={styles.resetIcon}
            onClick={() => handleReset("title")}
          >
            &#10006; 
          </span>
        )}
      </div>

      <div className={styles.filterItem}>
        <select
          id="salaryRange"
          value={selectedSalary}
          onChange={handleSalaryChange}
          className={styles.selectField}
        >
          <option value="" disabled>{t("filters.salaryRange")}</option>
          {salaryRanges.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
        {selectedSalary && (
          <span
            className={styles.resetIcon}
            onClick={() => handleReset("salary")}
          >
            &#10006; 
          </span>
        )}
      </div>

      <div className={styles.filterItem}>
        <select
          id="datePosted"
          value={selectedDate}
          onChange={handleDateChange}
          className={styles.selectField}
        >
          <option value="" disabled>{t("filters.datePosted")}</option>
          {dates.map((date, index) => (
            <option key={index} value={date}>
              {date}
            </option>
          ))}
        </select>
        {selectedDate && (
          <span
            className={styles.resetIcon}
            onClick={() => handleReset("date")}
          >
            &#10006; 
          </span>
        )}
      </div>
    </div>
  );
};

export default Filters;