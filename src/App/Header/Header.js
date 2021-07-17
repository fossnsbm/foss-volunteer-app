import { PageHeader,  Descriptions} from 'antd';
import classNames from "./Header.module.scss";
import { DefaultButton } from "../../components";

export const Header = () => {   

    return (
        <div className={classNames.site}>          
        <PageHeader> 
          <div className={classNames.description}>
          <Descriptions.Item label="Remarks">
              <h1>Welcome to FOSS NSBM Volunteer</h1>
            </Descriptions.Item>
            </div>
            <DefaultButton variant="secondary" size="large" className={classNames.HeaderBtn}>Call to Action</DefaultButton>
        </PageHeader>
      </div>
    );
};           