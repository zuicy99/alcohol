import styled from "@emotion/styled/macro";
import { Table } from "antd";
import { Common } from "../CommonCss";

export const TableCustom = styled(Table)`
  :where(.css-dev-only-do-not-override-1xg9z9n).ant-table-wrapper
    .ant-table-tbody
    .ant-table-row.ant-table-row-selected
    > .ant-table-cell {
    background-color: ${Common.color.p000};
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${Common.color.p000};
    border-color: ${Common.color.p000};
  }
  .ant-checkbox-wrapper-checked:hover .ant-checkbox-inner,
  .ant-checkbox-checked:hover .ant-checkbox-inner {
    /* border-color: rgba(40, 40, 40, 0.8) !important; */
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: #d9d9d9 !important;
  }
  :where(.css-dev-only-do-not-override-1xg9z9n).ant-checkbox-indeterminate
    .ant-checkbox-inner:after {
    background-color: ${Common.color.p900};
  }
  &&& {
    .ant-table-cell {
      color: ${Common.color.p900};
    }
    .ant-table-thead > tr > th {
      text-align: center;
    }
    .ant-table-tbody > tr > td {
      text-align: center;
      color: ${Common.color.p500};
    }
  }
`;
