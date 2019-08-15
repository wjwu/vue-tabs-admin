<template>
  <div>
    <el-form label-width="120px" size="medium" :model="searchForm">
      <el-row>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <el-form-item label="用户ID：">
            <el-input v-model="searchForm.userId"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <el-form-item label="真实姓名：">
            <el-input v-model="searchForm.realName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <el-form-item label="昵称：">
            <el-input v-model="searchForm.nickName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <el-form-item label="手机号：">
            <el-input v-model="searchForm.phone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <el-form-item label="状态：">
            <el-select v-model="searchForm.freeze" style="width:100%">
              <el-option label="全部" value></el-option>
              <el-option label="未冻结" value="false"></el-option>
              <el-option label="已冻结" value="true"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <el-form-item>
            <el-button type="primary" @click="handleSearch">搜索</el-button>
            <el-button @click="handleReset">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-table v-loading="loading" :data="users" border style="width:100%">
      <el-table-column label="用户ID" prop="userId"></el-table-column>
      <el-table-column label="真实姓名" prop="realName"></el-table-column>
      <el-table-column label="昵称" prop="nickName"></el-table-column>
      <el-table-column label="手机号" prop="phone"></el-table-column>
      <el-table-column label="状态" prop="freeze">
        <template slot-scope="scope">{{ scope.row.freeze | freeze }}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="medium" @click="handleView(scope.row)">查看详情</el-button>
          <el-button type="text" size="medium" @click="handleVIP(scope.row)">更改会员</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="total"
      :page-size="pageSize"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      searchForm: {
        userId: '',
        realName: '',
        nickName: '',
        phone: '',
        freeze: ''
      }
    };
  },
  computed: mapState('user', {
    users: state => state.getUsers.data,
    loading: state => state.getUsers.loading,
    total: state => state.getUsers.total
  }),
  mounted() {
    this.getUsers();
  },
  methods: {
    ...mapActions('user', ['getUsers'])
  }
};
</script>