<template>
  <div>
    <el-form label-width="120px" size="medium" :model="searchForm">
      <el-row>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <el-form-item label="用户ID：">
            <el-input v-model="searchForm.userId" />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <el-form-item label="真实姓名：">
            <el-input v-model="searchForm.realName" />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <el-form-item label="昵称：">
            <el-input v-model="searchForm.nickName" />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <el-form-item label="手机号：">
            <el-input v-model="searchForm.phone" />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <el-form-item label="状态：">
            <el-select v-model="searchForm.status" style="width:100%">
              <el-option label="全部" value />
              <el-option label="禁用" value="false" />
              <el-option label="启用" value="true" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <el-form-item>
            <el-button type="primary" @click="handleSearch">
              搜索
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-table v-loading="loading" :data="users" border>
      <el-table-column label="用户ID" prop="userId" />
      <el-table-column label="真实姓名" prop="realName" />
      <el-table-column label="昵称" prop="nickName" />
      <el-table-column label="手机号" prop="phone" />
      <el-table-column label="状态">
        <template slot-scope="scope">
          {{ scope.row.status | userStatus }}
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="medium"
            @click="handleViewDetailTab(scope.row.userId)"
          >
            查看详情（tab页）
          </el-button>
          <el-button type="text" size="medium" @click="handleViewDetailDialog(scope.row)">
            查看详情（弹框）
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :page-size="pageSize"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <UserDetailDialog :visible.sync="userDetailDialogVisible" :user="selectedUser" />
  </div>
</template>

<script>
import { mapActions,mapState } from 'vuex';

import { OPEN_TAB } from '../../../common/js/events';
import { USER_DETAIL } from '../../../common/js/menus';
import UserDetailDialog from './components/UserDetailDialog';

export default {
  components: {
    UserDetailDialog
  },
  data() {
    return {
      searchForm: {
        userId: '',
        realName: '',
        nickName: '',
        phone: '',
        status: ''
      },
      pageSize: 10,
      pageIndex: 1,
      selectedUser: null,
      userDetailDialogVisible: false
    };
  },
  computed: mapState('user', {
    users: state => state.getUsers.data,
    loading: state => state.getUsers.loading,
    total: state => state.getUsers.total
  }),
  mounted() {
    this.loadData();
  },
  methods: {
    ...mapActions('user', ['getUsers']),
    handleViewDetailTab(userId) {
      this.$publish(OPEN_TAB, USER_DETAIL, userId);
    },
    handleViewDetailDialog(user) {
      this.selectedUser = user;
      this.userDetailDialogVisible = true;
    },
    loadData() {
      this.getUsers({
        pageSize: this.pageSize,
        pageIndex: this.pageIndex,
        ...this.searchForm
      });
    },
    handleSearch() {
      this.pageIndex = 1;
      this.loadData();
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize;
      this.loadData();
    },
    handleCurrentChange(pageIndex) {
      this.pageIndex = pageIndex;
      this.loadData();
    }
  }
};
</script>