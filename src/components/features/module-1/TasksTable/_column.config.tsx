import { EditOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const columns = (t: any): ColumnsType<DataType> => [
  {
    title: t(`module_1.label.task`),
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: t(`module_1.label.title`),
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: t(`module_1.label.status`),
    dataIndex: 'status',
    key: 'status',
    render(value) {
      switch (value) {
        case 'todo':
          return <Tag color="default">{value}</Tag>;
        case 'in progress':
          return <Tag color="orange">{value}</Tag>;
        case 'done':
          return <Tag color="success">{value}</Tag>;
        case 'backlog':
          return <Tag color="blue">{value}</Tag>;
        case 'canceled':
          return <Tag color="red">{value}</Tag>;
      }
    },
  },
  {
    title: t(`module_1.label.priority`),
    key: 'priority',
    dataIndex: 'priority',
    render(value) {
      switch (value) {
        case 'low':
          return <Tag color="green">{value}</Tag>;
        case 'medium':
          return <Tag color="orange">{value}</Tag>;
        case 'high':
          return <Tag color="red">{value}</Tag>;
      }
    },
  },
  {
    title: t(`module_1.label.action`),
    key: 'action',
    render: () => <EditOutlined />,
  },
];

export { columns };
