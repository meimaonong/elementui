<template>
<div id="user">
    
    <div class="main_c">

        <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
            <el-input size="small" v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" size="small">查询</el-button>
        </el-form-item>
        </el-form>

        <el-table
            :data="tableData"
            stripe
            border
            style="width: 100%">
            <el-table-column
            prop="date"
            label="日期"
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            width="180">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址">
            </el-table-column>
        </el-table>

        <el-pagination
            layout="prev, pager, next"
            :total="50">
        </el-pagination>
    </div>

</div>
</template>
<script src="./category.js"></script>
