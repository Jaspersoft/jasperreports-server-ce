define(["require","underscore","dataSource/view/BaseDataSourceView","dataSource/model/BeanDataSourceModel","text!dataSource/template/beanSpecificTemplate.htm"],function(e){"use strict";var t=e("underscore"),a=e("dataSource/view/BaseDataSourceView"),r=e("dataSource/model/BeanDataSourceModel"),c=e("text!dataSource/template/beanSpecificTemplate.htm");return a.extend({PAGE_TITLE_NEW_MESSAGE_CODE:"resource.datasource.bean.page.title.new",PAGE_TITLE_EDIT_MESSAGE_CODE:"resource.datasource.bean.page.title.edit",modelConstructor:r,render:function(){return this.$el.empty(),this.renderBeanSpecificSection(),this.renderTestConnectionSection(),this},renderBeanSpecificSection:function(){this.$el.append(t.template(c,this.templateData()))}})});