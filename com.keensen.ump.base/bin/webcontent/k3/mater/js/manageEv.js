com.keensen.ump.base.k3.K3BomMgr.prototype.initEvent = function() {

	this.listPanel4Group.selModel.on('rowselect', function(o, i, r) {
				var _this = this;
	(function	() {
					var modal = _this.listPanel4Head.modal.getValue();
					modal = modal == true ? 'Y' : 'N';
					_this.listPanel4Head.store.removeAll();
					// _this.listPanel4Group.store.removeAll();
					// _this.listPanel4List.store.removeAll();
					_this.listPanel4Head.store.add(r);

					var finterId = r.get('finterId');
					var store = _this.listPanel4List.store;
					store.baseParams = {
						'finterId' : finterId,
						'modal' : modal
					};
					store.load();
				}).defer(100);
			}, this);
}