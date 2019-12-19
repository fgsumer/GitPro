import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Dashboard from './profile';
import Profile from './dashboard';
import Settings from './settings';
import LogoutComponent from './logout';
import Projects from './projects';
import Preview from '../landing/Preview/Preview';
import GithubComponent from './github';
import Portfolio from './portfolio';

import { Menu, Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const Main = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Sider theme="light" style={{ paddingTop: 40 }}>
            <Menu selectable={false} mode="vertical">
              <Menu.ItemGroup title="HERE: Gitpro and logo" />
              <Menu.ItemGroup title="HERE: Person and Icon">
                <Menu.Item>
                  <Link to="/auth/dashboard">Dashboard</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/auth/profile/personal">Profile</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/auth/projects">Projects</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/auth/settings">Settings</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/preview">Preview</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/auth/logout">Logout</Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', margin: 10 }}>Header</Header>
            <Content style={{ margin: 10 }}>
              <Switch>
                <Route path="/auth/dashboard">
                  <Profile />
                </Route>
                <Route path="/auth/profile/personal">
                  <Dashboard />
                </Route>
                <Route path="/auth/projects">
                  <Projects />
                </Route>
                <Route path="/auth/settings">
                  <Settings />
                </Route>
                <Route path="/preview">
                  <Preview />
                </Route>
                <Route path="/auth/github">
                  <GithubComponent />
                </Route>
                <Route path="/auth/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/auth/logout">
                  <LogoutComponent />
                </Route>
              </Switch>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
};

export default Main;
