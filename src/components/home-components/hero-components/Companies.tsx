import React from "react";

import CompanyList from "./CompanyList";

const Companies = () => {
    return (
        <section className="flex bg-[rgba(36, 36, 36, 0.2)] h-36 border border-grey15 overflow-hidden">
            <CompanyList></CompanyList>
        </section>
    )
}

export default Companies;