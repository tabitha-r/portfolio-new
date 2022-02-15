import React from 'react';
import {ReactComponent as Express} from '../../images/devicon/express-original.svg';
import {ReactComponent as Firebase} from '../../images/devicon/firebase-plain.svg';
import {ReactComponent as Jquery} from '../../images/devicon/jquery-plain.svg';
import {ReactComponent as Mongodb} from '../../images/devicon/mongodb-original.svg';
import {ReactComponent as Mysql} from '../../images/devicon/mysql-plain.svg';
import {ReactComponent as Nextjs} from '../../images/devicon/nextjs-original.svg';
import {ReactComponent as Postgresql} from '../../images/devicon/postgresql-plain.svg';
import {ReactComponent as Python} from '../../images/devicon/python-original.svg';
import {ReactComponent as Ruby} from '../../images/devicon/ruby-plain.svg';
import {ReactComponent as Typescript} from '../../images/devicon/typescript-plain.svg';
import {ReactComponent as Webpack} from '../../images/devicon/webpack-original.svg';

const StudyingIcons = () => {
    
    return (
        <div className="studyingIcons">
            <abbr title="Express.js"><Express className="devIcon" /></abbr>
            <abbr title="PostgreSQL"><Postgresql className="devIcon" /></abbr>
            <abbr title="jQuery"><Jquery className="devIcon" /></abbr>
            <abbr title="TypeScript"><Typescript className="devIcon" /></abbr>
            <abbr title="Webpack"><Webpack className="devIcon" /></abbr>
            <abbr title="Next.js"><Nextjs className="devIcon" /></abbr>
            <abbr title="Firebase"><Firebase className="devIcon" /></abbr>
            <abbr title="mongoDb"><Mongodb className="devIcon" /></abbr>
            <abbr title="MySQL"><Mysql className="devIcon" /></abbr>
            <abbr title="Python"><Python className="devIcon" /></abbr>
            <abbr title="Ruby"><Ruby className="devIcon" /></abbr>
        </div>
    )
}

export default StudyingIcons;