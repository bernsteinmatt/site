/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["ojs/ojcore","jquery","ojs/ojdatasource-common"],function(e,t){"use strict";
/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */e.FlattenedTreeTableDataSource=function(t,a){var r=a||{};if(!(t instanceof e.FlattenedTreeDataSource)){var n=e.TableDataSource._LOGGER_MSG._ERR_DATA_INVALID_TYPE_SUMMARY,s=e.TableDataSource._LOGGER_MSG._ERR_DATA_INVALID_TYPE_DETAIL;throw new Error(n+"\n"+s)}this._data=t,this._eventHandlers=[],this._startIndex=0,this._nodeSetList=[],this._hasMore=!0,null==this._data.getOption("fetchSize")&&(this._data.getFetchSize=function(){return-1});var o=this;this._data.insertRows=function(t,a,r){for(var n=[],s=[],l=[],i=0;i<r.getCount();i++){var d=r.getData(i),c=r.getMetadata(i).key,u=t+i;o._nodeSetList.splice(u,0,{}),o._nodeSetList[u].nodeSet=r,o._nodeSetList[u].startIndex=t;for(var h=u+1;h<o._nodeSetList.length;h++)o._nodeSetList[h].startIndex+=1;n.push(o._wrapWritableValue(d)),s.push(c),l.push(u),o._rows.data.splice(u,0,d),o._rows.keys.splice(u,0,c),o._rows.indexes.splice(u,0,u)}o._realignRowIndices(),o._hasMore=!0,e.TableDataSource.superclass.handleEvent.call(o,e.TableDataSource.EventType.ADD,{data:n,keys:s,indexes:l})},this._data.removeRows=function(t){for(var a=[],r=[],n=[],s=t.length-1;s>=0;s--){var l=t[s].index;a.push(""),r.push(t[s].key),n.push(l),o._nodeSetList.splice(l,1);for(var i=l;i<o._nodeSetList.length;i++)o._nodeSetList[i].startIndex-=1;o._rows.data.splice(l,1),o._rows.keys.splice(l,1),o._rows.indexes.splice(l,1)}o._realignRowIndices(),o._hasMore=!0,e.TableDataSource.superclass.handleEvent.call(o,e.TableDataSource.EventType.REMOVE,{data:a,keys:r,indexes:n.sort(function(e,t){return e-t})})},this.Init(),(null==r||"enabled"!==r.startFetch&&null!=r.startFetch)&&null!=r||(this._startFetchEnabled=!0)},e.Object.createSubclass(e.FlattenedTreeTableDataSource,e.TableDataSource,"oj.FlattenedTreeTableDataSource"),e.FlattenedTreeTableDataSource.prototype.Init=function(){e.FlattenedTreeTableDataSource.superclass.Init.call(this)},e.FlattenedTreeTableDataSource.prototype.getCapability=function(e){return"full"},e.FlattenedTreeTableDataSource.prototype.getWrappedDataSource=function(){return this._data},e.FlattenedTreeTableDataSource.prototype.fetch=function(e){var t=e||{};return"init"!==t.fetchType||this._startFetchEnabled?this._fetchInternal(t):Promise.resolve()},e.FlattenedTreeTableDataSource.prototype.at=function(e,t){var a;return a=e<0||e>=this._rows.data.length?null:{data:this._rows.data[e],index:e,key:this._rows.keys[e]},new Promise(function(e){e(a)})},e.FlattenedTreeTableDataSource.prototype.collapse=function(e){this._data.collapse(e)},e.FlattenedTreeTableDataSource.prototype.expand=function(e){this._data.expand(e)},e.FlattenedTreeTableDataSource.prototype.get=function(e,t){var a=null,r=this._data.getIndex(e),n=this._rows.data[r];return null!=n&&(a={data:this._wrapWritableValue(n),key:e,index:r}),Promise.resolve(a)},e.FlattenedTreeTableDataSource.prototype.on=function(t,a){"expand"===t||"collapse"===t?this._data.on(t,a):e.FlattenedTreeTableDataSource.superclass.on.call(this,t,a)},e.FlattenedTreeTableDataSource.prototype.off=function(t,a){"expand"===t||"collapse"===t?this._data.off(t,a):e.FlattenedTreeTableDataSource.superclass.off.call(this,t,a)},e.FlattenedTreeTableDataSource.prototype.sort=function(t){null==t?t=this.sortCriteria:this.sortCriteria=t;var a=this;return t.axis="column",new Promise(function(r,n){a._data.getWrappedDataSource().sort(t,{success:function(){setTimeout(function(){a._data.refresh(),a._rows=null;var n={header:t.key,direction:t.direction};e.TableDataSource.superclass.handleEvent.call(a,e.TableDataSource.EventType.RESET,null),r(n)},0)},error:function(e){n(e)}})})},e.FlattenedTreeTableDataSource.prototype.totalSize=function(){return this._hasMore?-1:this._rows.data.length},e.FlattenedTreeTableDataSource.prototype.totalSizeConfidence=function(){return this._hasMore?"unknown":"actual"},e.FlattenedTreeTableDataSource.prototype._getMetadata=function(e){var t=this._nodeSetList[e].nodeSet.getStart();return this._nodeSetList[e].nodeSet.getMetadata(t+e-this._nodeSetList[e].startIndex)},e.FlattenedTreeTableDataSource.prototype._fetchInternal=function(t){var a=t||{};this._startFetch(a),this._startIndex=null==a.startIndex?this._startIndex:a.startIndex;var r=Number.MAX_VALUE;this._pageSize=null==a.pageSize?this._pageSize:a.pageSize,null!=this._pageSize&&(r=this._pageSize);var n=this._startIndex;if(null!=this._rows)if(null!=this._pageSize){var s=this._rows.data.length-1;if(this._startIndex+(this._pageSize-1)<=s){s=e.FlattenedTreeTableDataSource._getEndIndex(this._rows,this._startIndex,this._pageSize);for(var o=[],l=[],i=this._startIndex;i<=s;i++){var d=this._rows.keys[i];o[i-this._startIndex]=this._wrapWritableValue(this._rows.data[i]),l[i-this._startIndex]=d}var c={data:o,keys:l,startIndex:this._startIndex};return this._endFetch(a,c,null),Promise.resolve(c)}this._startIndex<=s&&(n=s+1)}else this._data.refresh(),this._rows=null;else n=0;var u={start:n,count:r},h=this;return new Promise(function(t,r){h._data.fetchRows(u,{success:function(r){h._handleFetchRowsSuccess(r),a.refresh=!0;for(var n=e.FlattenedTreeTableDataSource._getEndIndex(h._rows,h._startIndex,h._pageSize),s=[],o=[],l=h._startIndex;l<=n;l++){var i=h._rows.keys[l];s[l-h._startIndex]=h._wrapWritableValue(h._rows.data[l]),o[l-h._startIndex]=i}s.length>0?null!=h._pageSize&&s.length<h._pageSize?h._hasMore=!1:h._hasMore=!0:h._hasMore=!1;var d={data:s,keys:o,startIndex:h._startIndex};h._endFetch(a,d,null),t(d)},error:function(e){h._endFetch(a,null,e),r(e)}})})},e.FlattenedTreeTableDataSource.prototype._handleFetchRowsSuccess=function(t){for(var a=t.getStart(),r=0;r<t.getCount();r++){var n=a+r;this._nodeSetList[n]={},this._nodeSetList[n].nodeSet=t,this._nodeSetList[n].startIndex=a}this._rows||(this._rows={},this._rows.data=[],this._rows.keys=[],this._rows.indexes=[]),e.FlattenedTreeTableDataSource._getRowArray(t,this,this._rows,a)},e.FlattenedTreeTableDataSource.prototype._startFetch=function(t){t.silent||e.TableDataSource.superclass.handleEvent.call(this,e.TableDataSource.EventType.REQUEST,{startIndex:t.startIndex})},e.FlattenedTreeTableDataSource.prototype._endFetch=function(t,a,r){null!=r?e.TableDataSource.superclass.handleEvent.call(this,e.TableDataSource.EventType.ERROR,r):t.silent||e.TableDataSource.superclass.handleEvent.call(this,e.TableDataSource.EventType.SYNC,a)},e.FlattenedTreeTableDataSource._getEndIndex=function(e,t,a){var r=e.data.length-1;return a>0&&(r=(r=t+(a-1))>e.data.length-1?e.data.length-1:r),r},e.FlattenedTreeTableDataSource._getRowArray=function(e,t,a,r){for(var n=0;n<e.getCount();n++){var s=e.getData(e.getStart()+n);a.data[r+n]=s,a.keys[r+n]=e.getMetadata(e.getStart()+n).key,a.indexes[r+n]=r+n}},e.FlattenedTreeTableDataSource.prototype._realignRowIndices=function(){for(var e=0;e<this._rows.data.length;e++)this._rows.indexes[e]=e},e.FlattenedTreeTableDataSource.prototype._wrapWritableValue=function(a){for(var r=t.extend(!0,{},a),n=Object.keys(a),s=0;s<n.length;s++)e.FlattenedTreeTableDataSource._defineProperty(r,a,n[s]);return r},e.FlattenedTreeTableDataSource._defineProperty=function(e,t,a){Object.defineProperty(e,a,{get:function(){return t[a]},set:function(e){t[a]=e},enumerable:!0})}});
//# sourceMappingURL=ojflattenedtreetabledatasource.js.map